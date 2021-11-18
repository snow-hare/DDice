/*
I am using libraries that have licenses that I don't know how to deal with yet.
Here are the links to the github pages for these libraries:

https://github.com/react-native-picker/picker
https://github.com/react-native-async-storage/async-storage
https://github.com/callstack/react-native-paper or https://callstack.github.io/react-native-paper/index.html
https://github.com/Templarian/MaterialDesign-React
*/


import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import create from './screens/create.js';
import compare from './screens/compare.js';
import Home from './screens/Home.js';
import Spells from './screens/Spells.js';
import './components/DDGlobal.js';
import { createState } from "niue"; 

const [_useStore, _setState] = createState({
  items: [
      {id: 1, text: 'p'},
      {id: 2, text: 'e'},
      {id: 3, text: 'n'},
      {id: 4, text: 'i'},
      {id: 5, text: 's'},
      {id: 6, text: 'e'},
      {id: 7, text: 's'},
  ]
});


export const useStore = _useStore;
export const setState = _setState;

const App = () => {
  const [index, setIndex] = React.useState(2);

  const [routes] = React.useState([
    { key: 'spells', title: 'Spells', icon: 'fire', color: '#231942' },
    { key: 'create', title: 'Create', icon: 'auto-fix', color: '#231942' },
    { key: 'home', title: 'Home', icon: 'home', color: '#231942' },
    {key: 'chart', title: 'Compare', icon: 'chart-bell-curve', color: '#231942'},
    { key: 'settings', title: 'Settings', icon: 'cog', color: '#231942' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    spells: Spells,
    create: create,
    home: Home,
    chart: compare,
    settings: create,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
