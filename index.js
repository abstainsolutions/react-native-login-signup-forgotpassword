import React from "react";

import { AppRegistry } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';
import { NativeBaseProvider, Box } from 'native-base';


const RootApp = () => (
<NativeBaseProvider>
    <App />
</NativeBaseProvider>
);
AppRegistry.registerComponent(appName, () => RootApp);

