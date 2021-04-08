import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as navigationTheme from "./app/navigation/navigationTheme";

import AuthNavigator from "./app/navigation/AuthNavigator";
import Screen from "./app/components/Screen";

const Link = () => {
	const navigation = useNavigation();

	return (
		<Button
			title="Click"
			onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
		/>
	);
};

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
);

const TweetDetails = ({ route }) => (
	<Screen>
		<Text>Tweet Details {route.params.id}</Text>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
		<Stack.Screen
			name="TweetsDetails"
			component={TweetDetails}
			options={({ route }) => ({ title: route.params.id })}
		></Stack.Screen>
	</Stack.Navigator>
);

const Account = () => (
	<Screen>
		<Text>Account</Text>
	</Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Feed" component={StackNavigator} />
		<Tab.Screen name="Account" component={Account} />
	</Tab.Navigator>
);

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AuthNavigator />
		</NavigationContainer>
	);
}
