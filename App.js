import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./component/Layout";

// Reduxでstoreに接続するためのProvider
import { Provider } from "react-redux";
import store from "./store/index";

// ローディング待ち
import { AppLoading } from "expo";

// native-base用モジュール
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  // ロードが終わるまでは「loading...」を表示するため、state「isReady」で制御
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  // DidMountのタイミングでフォントリソースをメモリ上に読み込み。終わったらisReadyをオン。
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
