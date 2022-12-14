import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import EnvBubble from "./components/EnvBubble"
import DarkMode from "./components/DarkModeButton"

import RoutesStack from "./routes"

import "./assets/css/styles.css"
import "react-toastify/dist/ReactToastify.css"

const App: React.FC = () => {
    return (
        <div className="h-full relative">
            {import.meta.env.VITE_MODE !== "production" && <EnvBubble />}
            <DarkMode />
            <BrowserRouter>
                <RoutesStack />
            </BrowserRouter>
            <ToastContainer />
        </div>
    )
}

export default App
