import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Hero = (props) => {
	return (
		<View style={styles.container}>
			<Button 
				title = {props.hero.name}
				onPress = {() => alert(props.hero.name+' '+props.hero.universe)}
				color = 'orange'
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		backgroundColor: 'orange'
	},
});
