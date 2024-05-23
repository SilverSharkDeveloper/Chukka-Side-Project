package com.example.backend.domain.model

import com.example.backend.domain.entity.BoardEntity
import com.example.backend.domain.entity.UserEntity

data class BoardModel(
    val title:String,
    val text:String,
    val user:UserModel
){
    fun toEntity(): BoardEntity {
        return BoardEntity(this.title,this.text,user.toEntity())
    }
}