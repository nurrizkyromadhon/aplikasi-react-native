import React, { Component } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet, Button} from 'react-native'

class OnlineAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama:'',
            alamat:'',
            listData: [],  
            idEdit:null,
            textButton:'Masukkan Data'      
        };
        this.url = "http://api.kakatoodigitalmedia.com/koneksi.php";
    }
    componentDidMount(){
        this.ambilListData()
    }
    async ambilListData(){
        await fetch(this.url)
        .then((response) => response.json())
        .then((json)=>{
            console.log("hasil yang didapat: "+ JSON.stringify(json.data.result));
            this.setState({listData:json.data.result})
        })
        .catch((error)=>{
            console.log("error : ", error);
        })
    }
    klikSimpan(){
        if (this.state.nama == '' || this.state.alamat =='') {
            alert("Silahkan masukkan nama dan alamat");
        }else{
            if (this.state.idEdit) {
                var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
            }else{
                var urlAksi = this.url+"/?op=buat";
            }            
            
            fetch(urlAksi,{
                method:'post',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body:"nama="+this.state.nama+"&alamat="+this.state.alamat
            })
            .then((response)=>response.json())
            .then((json)=>{
                this.setState({nama:''});
                this.setState({alamat:''});
                this.setState({textButton:'Masukkan Nama'});
                this.ambilListData();
            })
        }
    }
    async klikEdit(id){        
        await fetch(this.url+"/?op=detail&id="+id)
        .then((response) => response.json())
        .then((json)=>{
            this.setState({nama:json.data.result[0].nama})
            this.setState({alamat:json.data.result[0].alamat})
            this.setState({idEdit:id})
            this.setState({textButton:'Edit'});
        })
    }
    async klikDelete(id){
        await fetch(this.url+"/?op=delete&id="+id)
        .then((response) => response.json())
        .then((json)=>{
            alert("Data berhasil didelete");
            this.ambilListData();
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <View style={styles.viewWrapper}>
                <View style={styles.viewData}>
                    {
                        this.state.listData.map((val,index)=>(
                            <View style={styles.viewList} key={index}>
                            <View style={styles.listData}>
                            <Text style={styles.textListNama}>{val.nama}</Text>
                            <Text style={styles.textListAlamat}>{val.alamat}</Text>
                            </View>                            
                            <Text style={styles.textListEdit} 
                            onPress={()=> this.klikEdit(val.id)}>
                            Edit</Text>
                            <Text style={styles.textListDelete}
                            onPress={()=> this.klikDelete(val.id)}>
                            Delete</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.viewForm}>
                    <TextInput 
                    style={styles.textInput}
                    placeholder="Masukkan Nama"
                    value={this.state.nama}
                    onChangeText={(text) => this.setState({
                        nama:text
                    })}>

                    </TextInput>
                    <TextInput style={styles.textInput}
                    placeholder="Masukkan Alamat"
                    value={this.state.alamat}
                    onChangeText={(text) => this.setState({
                        alamat:text
                    })}>

                    </TextInput>
                    <Button title={this.state.textButton} onPress={() => this.klikSimpan()}/>
                </View>                
            </View>
        );
    }
}

export default OnlineAPI;

const styles = StyleSheet.create({
    viewWrapper:{
        flex:1,
    },
    viewForm:{
        flex:2,padding:10
    },
    viewData:{
        flex:4
    },
    textInput:{
        padding:10, 
        fontSize:12, 
        borderRadius:15,
        borderWidth:1,
        borderColor:'#cccc',
        marginBottom:10,
        backgroundColor:'#dedede'
    },
    viewList:{
        flexDirection:'row',padding:5,borderBottomWidth:1,
        borderColor:'#dedede'
    },
    textListNama:{
        fontSize:20, fontWeight:'bold'
    },
    textListAlamat:{
        fontSize:15,
    },
    listData:{
        flex:3
    },
    textListEdit:{
        color:'blue',marginRight:20
    },
    textListDelete:{
        color:'red'
    }

})