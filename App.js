import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as navigationTheme from "./app/navigation/navigationTheme";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
	return (
		<>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				<AuthNavigator />
			</NavigationContainer>
		</>
	);
}
