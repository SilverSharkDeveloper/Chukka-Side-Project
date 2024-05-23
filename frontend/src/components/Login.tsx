import {useCallback} from "react";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useCryptography} from "../crypto/crypto";

type LoginForm = {
    userIdentification: string
    userPw: string
}
const Login = ()=>{
    const navigate = useNavigate()
    const crypto = useCryptography()
    const { register,
        handleSubmit,
        watch} = useForm<LoginForm>({defaultValues: {userIdentification:"",userPw:""}})
    const isValid = !watch("userIdentification") || !watch("userPw")

    const onSubmit = useCallback(({userIdentification, userPw}:LoginForm)=>{
        fetch("http://localhost:8080/user/login",{
            method:'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userIdentification:userIdentification,
                userPw:userPw
            })
        })
            .then(async (res) =>{
                if(!res.ok){
                    throw new Error("아이디 패스워드가 틀렸습니다.")
                }else{
                    return res.json()
                }
            })
            .then(data => {
                sessionStorage.setItem("user",data.userName)
                navigate("/board")
            })
            .catch(async (error)=>{
                console.log(error)
                alert(error)
            })
    },[])

    const goToJoin = useCallback(()=>{
        navigate("/join")
    },[])

    return <>
        <h2>추카 로그인</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"column"} sx={{width:"200px"}} spacing={2}>
                <TextField
                    fullWidth
                    label={"아이디"}
                    {...register("userIdentification", {required: true})}
                    autoComplete="off"
                    inputProps={{maxLength: 50, autoComplete: "off"}}/>
                <TextField
                    fullWidth
                    label={"비밀번호"}
                    autoComplete="off"
                    {...register("userPw", {required: true})}
                    inputProps={{maxLength: 50, autoComplete: "off"}}/>
                <Stack direction={"row"} alignItems={"center"}>
                    <Button
                        fullWidth={true}
                        type={"submit"}
                        disabled={isValid}>
                        로그인
                    </Button>
                    <Button
                        fullWidth={true}
                        type={"button"}
                        onClick={goToJoin}>
                        회원가입
                    </Button>
                </Stack>
            </Stack>
        </form>
    </>
}

export default Login
