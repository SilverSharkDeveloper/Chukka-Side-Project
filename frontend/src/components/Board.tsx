import {Button, Link, Stack, TextField} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

type User ={
    id: number,
    userIdentification:string,
    userName:string
}

type Board = {
    text:string,
    title:string,
    user:User
}


const Board = ()=>{
    const navigate = useNavigate()
    const [boards,setBoards]= useState<Array<Board>>([])

    useEffect(() => {
        if(!sessionStorage.getItem("user")){
            alert("로그인하세요")
            navigate("/")
        }
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/board/list",{
            method:'GET'
        })
            .then(async (res) =>res.json())
            .then(data => setBoards(data))
    }, []);

    const goToWriteForm = useCallback(()=>{
        navigate("/board/write")
    },[])


    return <>
        <h2>{sessionStorage.getItem("user")}</h2>
        <Stack direction={"column"}
               sx={{width:"800px",alignItems:"center"}} spacing={2}>
            {boards.map((board)=>{
                return<BoardBox board={board}/>
            })}
            <Button
                fullWidth={true}
                type={"button"}
                onClick={goToWriteForm}>
                작성하러가기
            </Button>
        </Stack>


    </>
}

const BoardBox = ({board}:{ board: Board })=>{
    return <>
            <Stack direction={"row"} sx={{width:"800px",alignItems:"center"}} spacing={2}>
                <Button>{board.title}</Button>
                <Button>{board.user.userIdentification}</Button>
            </Stack>
    </>
}

export default Board