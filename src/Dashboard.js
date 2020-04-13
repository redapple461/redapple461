import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Hero } from './Hero';
import { useSelector } from 'react-redux';


export const Dashboard = ({navigation}) => {
  const heroes = useSelector(store => store.heroes)
	return (
		<View style={styles.container}>
			<Button 
				onPress ={ () => {navigation.navigate('HeroList', {navigation})}}
				title='Heroes'
			/>
			{
				heroes.map(hero => <Hero hero ={hero} navigation={navigation}/>)
			}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		
	},
});
