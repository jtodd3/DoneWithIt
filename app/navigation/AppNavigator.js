import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "../navigation/AccountNavigator";
import FeedNavigator from "../navigation/FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Feed" component={FeedNavigator} />
		<Tab.Screen name="ListingEdit" component={ListingEditScreen} />
		<Tab.Screen name="Account" component={AccountNavigator} />
	</Tab.Navigator>
);

export default AppNavigator;
