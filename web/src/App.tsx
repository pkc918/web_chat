import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { SignIn } from "./views/SignIn/SignIn";
import { Chat } from "@/views/Chat/Chat";

function Global() {
    return (
        <div className="max-w-[30cm] max-h-[20cm] min-w-[30cm] min-h-[20cm] rounded-[5px] bg-[#f7f8fa] flex">
            <Outlet></Outlet>
        </div>
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Global/> }>
                        {/* Layout */ }
                        <Route path="/" element={ <Layout/> }>
                            <Route path="/" element={ <Chat/> }></Route>
                            <Route path="chat" element={ "Chat Home!" }></Route>
                        </Route>
                        {/* SignIn SignUp */ }
                        <Route path="signIn" element={ <SignIn></SignIn> }></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
