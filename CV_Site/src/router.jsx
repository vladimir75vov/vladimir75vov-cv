import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage";
import {NotFoundPage} from "./pages/NotFound/NotFoundPage";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={"/"} element={<Navigate to={"/home"}/>}/>
        <Route path={"/home"} element={<HomePage/>}/>
        <Route path={"*"} element={<NotFoundPage/>}/>
    </>
))

export {router};