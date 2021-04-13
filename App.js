import React, { userState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as navigationTheme from "./app/navigation/navigationTheme";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";

export default function App() {
	const [user, setUser] = userState();

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
