import './App.css'
import { MyComponent } from "./components/MyConponent";
import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { SignIn } from "./components/SignIn/SignIn";

function Global() {
    return (
        <div className="w-[30cm] h-[20cm] bg-[#f7f8fa] flex">
            <Outlet></Outlet>
        </div>
    )
}


function App() {
    return (
        <>
            <BrowserRouter basename="/web_chat">
                <Routes>
                    <Route path="/" element={ <Global/> }>
                        {/* Layout */ }
                        <Route path="/" element={ <Layout/> }>
                            <Route path="/" element={ <h1>Layout Home!</h1> }></Route>
                            <Route path="chat" element={ <h1>Chat Home!</h1> }></Route>
                        </Route>
                        {/* SignIn SignUp */ }
                        <Route path="signIn" element={ <SignIn></SignIn> }></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
