import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Hero } from './Hero';
import {heroes} from './tempHeroes'

export const Dashboard = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Button 
				onPress ={ () => {navigation.navigate('HeroList')}}
				title='Heroes'
			/>
			{
				heroes.map(hero => <Hero hero ={hero}/>)
			}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		
	},
});
