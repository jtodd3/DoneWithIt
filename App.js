import React from "react";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";

export default function App() {
	const requestPermissions = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			alert("You need to enable permission to access the library");
		}
	};

	useEffect(() => {
		requestPermissions();
	}, []);

	return <Screen></Screen>;
}
