import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dashboard } from './src/Dashboard';

export default function App() {
	let counter = 0;
	return (
		<View style={styles.container}>
			<Dashboard />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
});
