import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

class Main extends Component {
  static navigationOptions = {
    title: 'Main'
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
  }

  render() {
    return (
      <View>
        <Text>Main page</Text>
        <TouchableOpacity onPress={this.goHelp}>
          <Text>Go to help</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class Help extends Component {
  static navigationOptions = {
    title: 'Help'
  }

  render() {
    return (
      <View>
        <Text>Help page</Text>
      </View>
    )
  }
}

const HelpStack = StackNavigator({
  Help: { screen: Help }
}, {
  headerMode: 'none'
})

const Nav = StackNavigator({
  Main: { screen: Main },
  Help: { screen: HelpStack }
})

class App extends Component {
  render() {
    return (
      <View style={{width: 327, height: 578, borderWidth: 1, borderColor: 'black', overflow: 'hidden', margin: 30}}>
        <Nav />
      </View>
    );
  }
}

export default App;
