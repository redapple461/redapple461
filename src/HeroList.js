import React from 'react'
import { ScrollView, Button , TextInput, View } from 'react-native'
import {heroes} from './tempHeroes'
import { Hero } from './Hero';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './actions'

export const HeroList = (props) => {
  const heroes = useSelector(store => store.heroes)
  const addHero = useSelector(store => store.addHero)
  const dispatch = useDispatch();
	const add = () => {
    alert(JSON.stringify(addHero))
		dispatch(actions.addHero(addHero))
	}
	return(
		<ScrollView >
			{
				heroes.map(hero => <Hero hero={hero} navigation = {props.navigation} />)
			}
			<View style={{marginTop: 15}}>
        <TextInput 
          placeholder='name of add hero'
          style={{fontSize: 25}}
          onChangeText = {text=> dispatch(actions.updateAddHeroName(text))}
        ></TextInput>
				<Button	
					title="Add"
					onPress ={ () => add()}
				>
				</Button>
			</View>
		</ScrollView>
	)
}