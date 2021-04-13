import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import auth from "../api/auth";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
	const [error, setError] = useState();

	const handleSubmit = async (userInfo) => {
		const result = await usersApi.register(userInfo);

		if (!result.ok) {
			if (result.data) {
				setError(result.data.error);
			} else {
				setError("An unexpected error occurred");
				console.log(result);
			}
			return;
		}
		setError(false);

		const { data: authToken } = await authApi.login(
			userInfo.email,
			userInfo.password
		);
		auth.login(authToken);
	};

	return (
		<Screen style={styles.container}>
			<Form
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={(values) => handleSubmit(values)}
				validationSchema={validationSchema}
			>
				<ErrorMessage error={error} visible={!!error} />
				<FormField
					autoCorrect={false}
					icon="account"
					name="name"
					placeholder="Name"
				/>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					keyboardType="email-address"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
				/>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>
				<SubmitButton title="Register" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
