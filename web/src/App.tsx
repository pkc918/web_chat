import './App.css'
import { MyComponent } from "./components/MyConponent";
import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";

function Global(){
    return(
        <div className="bg-[#eee]">
            <h1>width: 31cm; height: 20cm;</h1>
            <Outlet></Outlet>
        </div>
    )
}


function App() {

    return (
        <>
            <BrowserRouter basename="/web_chat">
                <Routes>
                    <Route path="/" element={<Global/>}>
                        {/* Layout */ }
                        <Route path="/" element={ <MyComponent/> }>
                            <Route path="/" element={ <h1>Layout Home!</h1> }></Route>
                            <Route path="chat" element={ <h1>Chat Home!</h1> }></Route>
                        </Route>
                        {/* SignIn SignUp */ }
                        <Route path="/" element={ <Layout/> }>
                            <Route path="signIn" element={ <h1>用户操作!</h1> }></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
