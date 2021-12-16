import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";

// Components
import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./App.css";

const initialFormValues = {
	name: "",
	email: "",
	password: "",
	termsOfService: false,
};

const initialUsersValues = [];
const initialDisabled = true;

function App() {
	const [users, setUsers] = useState(initialUsersValues);
	const [formValues, setFormValues] = useState(initialFormValues); // Object
	const [disabled, setDisabled] = useState(initialDisabled); // Boolean

	// const [listOfUsers, setListOfUsers] = useState();

	const change = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	useEffect(() => {
		// Axios Request here
		axios
			.get("https://reqres.in/api/users")
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="App">
			<h1>Users App</h1>
			<Form data={formValues} change={change} disabled={disabled} />
			<List />
		</div>
	);
}

export default App;
