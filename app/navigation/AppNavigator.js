import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "../screens/ListingEditScreen";
import expoPushTokensApi from "../api/expoPushTokens";
import AccountNavigator from "../navigation/AccountNavigator";
import FeedNavigator from "../navigation/FeedNavigator";
import NewListingButton from "../navigation/NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	useEffect(() => {
		registerForPushNotifications();
	}, []);

	const registerForPushNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			if (!permission.granted) {
				return;
			}

			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokensApi.register(token);
		} catch (err) {
			console.log("Error getting a push token", err);
		}
	};

	return (
		<Tab.Navigator>
			<Tab.Screen
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton
							onPress={() => navigation.navigate(routes.LISTING_EDIT)}
						/>
					),
				})}
			/>
			<Tab.Screen
				name={routes.ACCOUNT}
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
