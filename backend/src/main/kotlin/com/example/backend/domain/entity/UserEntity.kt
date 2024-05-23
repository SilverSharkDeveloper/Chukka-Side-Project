package com.example.backend.domain.entity

import com.example.backend.domain.model.UserModel
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Table(name = "User_Table")
@Entity
data class UserEntity(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    val identification: String,
    val password : String,
    val userName : String
){
    constructor(identification: String,password: String,userName: String):this(null,identification,password,userName)

    fun toModel():UserModel{
       return UserModel(this.id,this.identification,this.password,this.userName)
    }
}