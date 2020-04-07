import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Dashboard } from './src/Dashboard';
import {HeroPage} from './src/HeroPage'
import {heroes} from './src/tempHeroes'
import { HeroList } from './src/HeroList';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Hero} from './src/Hero'

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name="Dashboard"
					component={Dashboard}
					options={{title: 'Welcome'}}
				/>
				<Stack.Screen 
					name="HeroList" 
					component={HeroList}
					options={{title: 'Heroes list'}}
				/>
				<Stack.Screen
					name='HeroPage'
					component={HeroPage}
				/>
				<Stack.Screen
					name='Hero'
					component={Hero}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
	marginTop: 50,
	borderWidth: 5,
	borderColor: 'blue'
  },
  component: {
	  margin: 15,
	  borderWidth: 3
  }
});
