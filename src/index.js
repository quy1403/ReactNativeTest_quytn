import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';
import RootNavigation from './Screens/RootNavigation';
import AppProvider from './AppProvider';
import { ModalPortal, SlideAnimation } from "react-native-modals";
import { Platform, UIManager } from "react-native";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
window.Global = {
    AuthenticationInfo: {},
    UserInfo: {},
    accessToken: null,
};

function App() {
    return (
        <AppProvider>
            <RootNavigation />
            <ModalPortal modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })} swipeDirection={['down', 'up']} />
        </AppProvider>
    );
}

export default App;
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
