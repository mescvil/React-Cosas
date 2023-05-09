import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
	transitions,
	positions,
	types,
	Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
	position: positions.TOP_RIGHT,
	type: types.ERROR,
	timeout: 2500,
	offset: "25px",
	transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AlertProvider
			template={AlertTemplate}
			{...options}
		>
			<App />
		</AlertProvider>
	</React.StrictMode>
);
