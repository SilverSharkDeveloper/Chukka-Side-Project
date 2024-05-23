import Login from "./components/Login";
import Join from "./components/Join";
import Board from "./components/Board";
import BoardWrite from "./components/BoardWrite";

export const LoginRoute = {
    path:"/",
    element:<Login/>
}

export const JoinRoute = {
    path:"/join",
    element:<Join/>
}

export const BoardRoute = {
    path:"/board",
    element:<Board/>
}

export const BoardWriteRoute = {
    path:"/board/write",
    element:<BoardWrite/>
}





