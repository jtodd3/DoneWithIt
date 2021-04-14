import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (noticationListener) => {
	useEffect(() => {
		registerForPushNotifications();

		if (noticationListener) {
			Notifications.addListener(noticationListener);
		}
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
};
