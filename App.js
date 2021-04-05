import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { Button, Text, Image } from "react-native";

export default function App() {
	const [imageUri, setImageUri] = useState();

	const requestPermissions = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			alert("You need to enable permission to access the library");
		}
	};

	useEffect(() => {
		requestPermissions();
	}, []);

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) {
				setImageUri(result.uri);
			}
		} catch (err) {
			console.log("Error rendering an image", err);
		}
	};

	return (
		<Screen>
			<Button title="Select Image" onPress={selectImage} />
			<Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
			<ImageInput imageUri={imageUri} />
		</Screen>
	);
}
