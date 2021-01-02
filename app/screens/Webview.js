import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';

// import { styles } from './styles';
import {InternetOverlay, LoadingOverlay} from '../components/overlays';

const WebViewScreen = props => {
  const [isLoadingVIsible, setIsLoadingVIsible] = useState(true);
  const [isInternet, setIsInternet] = useState(true);
  const srcUrl = 'https://metta.one/';

  useEffect(() => {
    NetInfo.fetch().then(state => {
      state.isConnected ? setIsInternet(true) : setIsInternet(false);
    });
  }, []);

  const onLoadWebviewAndroid = navState => {
    if (Platform.OS === 'android') {
      if (navState.loading === false) {
        setIsLoadingVIsible(false);
      }
    }
  };
  const onLoadWebviewIos = navState => {
    if (Platform.OS === 'ios') {
      setIsLoadingVIsible(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: srcUrl}}
        style={{flex: 1}}
        onNavigationStateChange={onLoadWebviewAndroid}
        onLoad={onLoadWebviewIos}
      />
      {isLoadingVIsible && <LoadingOverlay />}
      {!isInternet && <InternetOverlay />}
    </View>
  );
};

export default WebViewScreen;
