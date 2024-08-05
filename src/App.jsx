import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home, SignIn, SignUp, LandingPage } from "./pages";

function App(){
    const user = useSelector((state) => state.app.user)

    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<Home />} /> 
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default App