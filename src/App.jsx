import React from "react";
import "./styles/App.css";
import HomePage from "./components/pages/HomePage.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Trains from "./components/pages/Trains";

function App() {
  return (
    <div>
		<Routes>
			<Route path="/" element = {<HomePage />} />
			<Route path="/booking" element = {<Trains />} />
		</Routes>
    </div>
  );
}
export default App;
