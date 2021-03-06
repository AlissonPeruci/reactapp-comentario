import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

function app() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default app;