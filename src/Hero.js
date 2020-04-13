import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import * as actions  from './actions'

export const Hero = (props) => {
  const dispath = useDispatch();
	return (
		<View style={styles.container}>
			<Button 
				title = {props.hero.name}
				onPress = {() => {dispath(actions.initDetailHero(props.hero)), props.navigation.navigate('HeroPage')}}
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
