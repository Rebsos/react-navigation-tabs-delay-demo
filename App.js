import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TabView, SceneMap } from 'react-native-tab-view';

const tab1Route = () => <View style={{ flex: 1, backgroundColor: 'red' }} />;
const tab2Route = () => <View style={{ flex: 1, backgroundColor: 'blue' }} />;
const tab3Route = () => <View style={{ flex: 1, backgroundColor: 'yellow' }} />;
const tab4Route = () => <View style={{ flex: 1, backgroundColor: 'green' }} />;

class ReactNativeTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'tab1', title: 'tab1' },
      { key: 'tab2', title: 'tab2' },
      { key: 'tab3', title: 'tab3' },
      { key: 'tab4', title: 'tab4' },
    ],
  };
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          tab1: tab1Route,
          tab2: tab2Route,
          tab3: tab3Route,
          tab4: tab4Route,
        })}
        onIndexChange={index => this.setState({ index })}
      />
    );
  }
}

const ReactNavigationTabs = createMaterialTopTabNavigator({
  tab1: { screen: tab1Route },
  tab2: { screen: tab2Route },
  tab3: { screen: tab3Route },
  tab4: { screen: tab4Route },
});

const ReactNavigation = createAppContainer(ReactNavigationTabs);

const App = () => {
  console.log('App.js');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>React Native Tab View 2.9.0</Text>
        <ReactNativeTabView/>
      </View>
      <View style={{flex: 1}}>
      <Text>React Navigation Tabs 2.3.0</Text>
        <ReactNavigation/>
      </View>
    </View>
  );
}

export default App;
