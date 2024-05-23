
import './App.css';
import {BrowserRouter, useRoutes} from "react-router-dom";
import {BoardRoute, BoardWriteRoute, JoinRoute, LoginRoute} from "./Routes";
const Routes = () => {
    return useRoutes([
        LoginRoute,
        JoinRoute,
        BoardRoute,
        BoardWriteRoute
    ])
}
const App = () => {
    return <>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </>
}

export default App;
