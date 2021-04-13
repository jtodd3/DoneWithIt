import React, { userState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as navigationTheme from "./app/navigation/navigationTheme";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
	const [user, setUser] = userState();
	const [isReady, setIsReady] = useState(false);

	const restoreToken = async () => {
		const token = await authStorage.getToken();
		if (!token) {
			return;
		}
		setUser(jwtDecode(token));
	};

	if (!isReady) {
		return (
			<AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
		);
	}

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
