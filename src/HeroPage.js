import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export const HeroPage = (props) => {
	return(
		<View>
			<Text> {props.hero.name} </Text>
			<TextInput placeholder='type new name'></TextInput>
			<Button title='save'></Button>
			<Button title='back'></Button>
		</View>
	)
}