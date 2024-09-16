import React from "react";

const Form = ({ data, change, disabled }) => {
	const inputChange = (e) => {
		const { name, value, checked, type } = e.target;
		const valueToUse = type === "checkbox" ? checked : value;
		change(name, valueToUse);
	};

	return (
		<div>
			<h2>Form Component</h2>
			<form>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={data.name}
						placeholder="Enter Name"
						onChange={inputChange}
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={data.email}
						placeholder="Enter Name"
						onChange={inputChange}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={data.password}
						placeholder="Enter Name"
						onChange={inputChange}
					/>
				</label>
				<label>
					Hiking
					<input
						type="checkbox"
						name="termsofservice"
						checked={data.termsOfService}
						onChange={inputChange}
					/>
				</label>
				<button disabled={disabled}>Submit</button>
			</form>
		</div>
	);
};

export default Form;
