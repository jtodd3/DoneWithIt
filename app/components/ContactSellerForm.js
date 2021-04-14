import React from "react";
import { Notifications } from "expo";
import { StyleSheet, Alert, Keyboard } from "react-native";

import messagesApi from "../api/messages";
import { FormField, Form, SubmitButton } from "./forms";

function ContactSellerForm({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss();

		const result = await messagesApi.send(message, listing.id);

		if (!result.ok) {
			console.log("Error", result);
			return Alert.alert("Error", "Could not send the message to the seller");
		}

		resetForm();

		Notifications.presentLocalNotificationAsync({
			title: "Awesome!",
			body: "Your message was sent to the seller",
		});
	};
	return (
		<Form onSubmit={handleSubmit}>
			<FormField name="message" placeholder="Message..." />
			<SubmitButton title="Contact Seller" />
		</Form>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default ContactSellerForm;
