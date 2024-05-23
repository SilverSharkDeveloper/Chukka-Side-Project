package com.example.backend.domain.model

import com.example.backend.domain.entity.UserEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

data class UserModel(
    val id: Long?,
    val userIdentification: String,
    var userPw : String,
    val userName : String
){
    companion object {
        val passwordEncoder = BCryptPasswordEncoder()
    }

    init {
        this.userPw = passwordEncoder.encode(userPw)
    }

    fun toEntity():UserEntity{
        return UserEntity(this.id,this.userIdentification,this.userPw,this.userName)
    }
}