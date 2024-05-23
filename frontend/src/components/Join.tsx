import {useCallback} from "react";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useCryptography} from "../crypto/crypto";

type JoinForm = {
    userIdentification: string
    userPw: string
    userName: string
}

const Join = ()=>{
    const navigate = useNavigate()
    const crypto = useCryptography()
    const { register,
        handleSubmit,
        watch} = useForm<JoinForm>({defaultValues: {userIdentification:"",userPw:"",userName:""}})
    const isValid = !watch("userIdentification") || !watch("userPw") || !watch("userName")

    const goTologin = useCallback(()=>{
        navigate("/")
    },[])

    const onSubmit = useCallback(({userIdentification, userPw,userName}:JoinForm)=>{
        fetch("http://localhost:8080/user/join",{
            method:'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userIdentification:userIdentification,
                userPw:userPw,
                userName:userName
            })
        })
            .then(async (res) => res.json())
            .then(data => {
                if(data){
                    alert("회원가입을 축하드립니다")
                    navigate("/")
                }else{
                    alert("중복된 아이디가 존재합니다.")
                }
            })
    },[])

    const goToLogin = useCallback(()=>{
        navigate("/login")
    },[])
    return <>
        <h2>추카 회원가입</h2>

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
                    {...register("userPw", {required: true})}
                    autoComplete="off"
                    inputProps={{maxLength: 50, autoComplete: "off"}}/>
                <TextField
                    fullWidth
                    label={"이름"}
                    {...register("userName", {required: true})}
                    autoComplete="off"
                    inputProps={{maxLength: 50, autoComplete: "off"}}/>
                <Stack direction={"row"} alignItems={"center"}>
                    <Button
                        fullWidth={true}
                        type={"submit"}
                        disabled={isValid}>
                        회원가입
                    </Button>
                    <Button
                        fullWidth={true}
                        type={"button"}
                        onClick={goTologin}>
                        로그인창
                    </Button>
                </Stack>

            </Stack>

        </form>
    </>
}

export default Join
