import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ""
  }

  onPlaceNameChange = placeName => {
    this.setState({ placeName })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height:60, width:300, borderColor: 'gray', borderWidth: 1}} value={this.state.placeName} onChangeText={this.onPlaceNameChange}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
