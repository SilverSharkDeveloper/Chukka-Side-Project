package com.example.backend.service

import com.example.backend.domain.entity.UserEntity
import com.example.backend.domain.model.UserModel
import org.springframework.http.ResponseEntity


interface UserService {
    fun userLogin(identification:String,password:String): UserEntity?

    fun userJoin(userModel:UserModel) :Boolean

    fun userCheckId(identification: String) :Boolean

    fun findByIdentification(identification: String):UserEntity?
}