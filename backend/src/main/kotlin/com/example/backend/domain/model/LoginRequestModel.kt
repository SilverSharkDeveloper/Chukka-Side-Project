package com.example.backend.domain.model

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

data class LoginRequestModel (
    val userIdentification:String,
    var userPw:String
)