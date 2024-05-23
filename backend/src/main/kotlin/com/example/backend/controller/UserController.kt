package com.example.backend.controller

import com.example.backend.domain.Exception.UserNotFoundException
import com.example.backend.domain.entity.UserEntity
import com.example.backend.domain.model.LoginRequestModel
import com.example.backend.domain.model.UserModel
import com.example.backend.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.lang.RuntimeException

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class UserController(private val userService: UserService) {

    @PostMapping("user/login")
    fun userLogin(@RequestBody loginRequestModel : LoginRequestModel): ResponseEntity<UserEntity> {
        println(loginRequestModel)
        val user: UserEntity =
            userService.userLogin(loginRequestModel.userIdentification, loginRequestModel.userPw)
                ?: throw UserNotFoundException("User Not Found")
        return ResponseEntity.status(HttpStatus.OK).body(user)
    }

    @PostMapping("user/join")
    fun userJoin(@RequestBody userModel:UserModel) :ResponseEntity<Boolean>{
        println(userModel)
        return  ResponseEntity.status(HttpStatus.OK).body(userService.userJoin(userModel))
    }


}