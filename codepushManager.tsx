import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import codePush from 'react-native-code-push';
import AsyncStorage from '@react-native-async-storage/async-storage';
const checkIfBetaTester = async () => {
    const res = await AsyncStorage.getItem('MyApp::IS_BETA_TESTER');
    return res === 'true';
};

const codepushKeys = {
    staging: Platform.select({
        ios: 'IOS_STAGING_KEY',
        android: '0gIp0WLUgvu8Hv7k_jUJVIY9Ydul0gxrV3xNs',
    }),
    production: Platform.select({
        ios: 'IOS_PRODUCTION_KEY',
        android: 'TN6cjcWPrQC9lMOy0ddkLSmmB6WHsj8FfHU7v',
    }),
};

function CodePushManager() {
    useEffect(() => {
        codePush
            .notifyAppReady()
            .then(() => checkIfBetaTester())
            .then((isBetaTester) => {
                if (isBetaTester) {
                    codePush.sync({
                        deploymentKey: codepushKeys.staging,
                        installMode: codePush.InstallMode.IMMEDIATE,
                    });
                } else {
                    codePush.sync({ 
                        deploymentKey: codepushKeys.production,
                        installMode: codePush.InstallMode.IMMEDIATE,
                    });
                }
            });
    }, [])
    return null
}

export default codePush({ checkFrequency: codePush.CheckFrequency.MANUAL })(
    CodePushManager
);