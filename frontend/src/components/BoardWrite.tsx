import {Button, Stack, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useCryptography} from "../crypto/crypto";
import {useForm} from "react-hook-form";
import {useCallback} from "react";

type BoardForm = {
    title:String,
    text:String
}

const BoardWrite = ()=>{
    const navigate = useNavigate()
    const { register,
        handleSubmit,
        watch} = useForm<BoardForm>({defaultValues: {title:"",text:""}})
    const isValid = !watch("title") || !watch("text")

    const goToBoard = useCallback(()=>{
        navigate("/board")
    },[])

    const onSubmit = useCallback(({title,text}:BoardForm)=>{
        fetch("http://localhost:8080/board/write",{
            method:'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:title,
                text:text,
                userIdentification: sessionStorage.getItem("user")
            })
        })
            .then(async (res) =>{
              navigate("/board")
            })
    },[])


    return<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"column"} sx={{width:"800px"}} spacing={2}>
                <TextField
                    fullWidth
                    label={"제목"}
                    {...register("title", {required: true})}
                    autoComplete="off"
                    inputProps={{maxLength: 50, autoComplete: "off"}}/>
                <TextField
                    sx={{height:"100px"}}
                    fullWidth
                    label={"내용"}
                    {...register("text", {required: true})}
                    autoComplete="off"
                    inputProps={{maxLength: 50, autoComplete: "off"}}/>
                <Stack direction={"row"} alignItems={"center"}>
                    <Button
                        fullWidth={true}
                        type={"submit"}
                        disabled={isValid}>
                        작성
                    </Button>
                    <Button
                        fullWidth={true}
                        type={"button"}
                        onClick={goToBoard}>
                        취소
                    </Button>
                </Stack>

            </Stack>

        </form>
    </>
}

export default BoardWrite