import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import _ from 'lodash';

const reducer = (state: any) => state;

const store = createStore(reducer);

const Main = () => {
  const state = useSelector(state => state);
  const status = _.isEmpty(state) ? 'looks lonely in here' : 'hello world';
  return (
    <View style={styles.container}>
      <Text>Store is empty? {status} </Text>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      {/* <View style={styles.container}>
        <Text>Store is empty? </Text>
      </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
