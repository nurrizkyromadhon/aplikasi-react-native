/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import OnlineAPI from './src/pages/OnlineAPI';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => OnlineAPI);
