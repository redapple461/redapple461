import React from 'react'
import { ScrollView, Button , TextInput, View } from 'react-native'
import {heroes} from './tempHeroes'
import { Hero } from './Hero';



export const HeroList = ({navigation}) => {
	let counter = 1;
	const add = () => {
		heroes.push({name:'Hero'+counter,universe: 'Marvel'});
		counter++;
	}
	return(
		<ScrollView>
			{
				heroes.map(hero => <Hero hero={hero}/>)
			}
			<View style={{marginTop: 15}}>
				<TextInput placeholder='onime'></TextInput>
				<Button	
					title="Add"
					onPress ={ () => add()}
				>
				</Button>
			</View>
		</ScrollView>
	)
}