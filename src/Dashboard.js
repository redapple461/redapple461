import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Hero } from './Hero';

export const Dashboard = () => {
	return (
		<View style={styles.container}>
			<Button 
				onPress ={ () => {alert('To heroes list')}}
				title='Heroes'
			/>
			<Hero name='Test Hero'></Hero>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: 50
	},
});
