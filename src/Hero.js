import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Hero = (props) => {
	return (
		<View>
			<Text> {props.name} </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50
	},
});
