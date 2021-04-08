import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
	const navigation = useNavigation();

	return (
		<Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
	);
};

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
);

const TweetDetails = () => (
	<Screen>
		<Text>Tweet Details</Text>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
		<Stack.Screen name="TweetsDetails" component={TweetDetails}></Stack.Screen>
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
