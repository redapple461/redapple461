import React, { useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './actions'
import { heroes } from './tempHeroes'

export const HeroPage = (props) => {
  const dispatch = useDispatch();
  const hero = useSelector(store => store.detailHero);
  const save = () => {
    dispatch(actions.updateHero());
  }
	return(
		<View>
			<Text style={{fontSize: 25}}> {hero.name} </Text>
			<TextInput style={{fontSize: 25}} placeholder='type new name' onChangeText ={text => dispatch(actions.updateName(text))}></TextInput>
			<Button title='save' onPress={() => save()}></Button>
			<Button title='back'></Button>
		</View>
	)
}