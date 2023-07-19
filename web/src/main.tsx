import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./tailwind.css";
import 'virtual:svg-icons-register'
import "simplebar"
import "simplebar/dist/simplebar.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
