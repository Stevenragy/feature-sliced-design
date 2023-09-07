// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { withProviders } from "./providers";
import { Routing } from "@pages";

function App() {
    return <Routing />;
}

// eslint-disable-next-line react-refresh/only-export-components
export default withProviders(App);
