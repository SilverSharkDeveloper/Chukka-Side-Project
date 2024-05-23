package com.example.backend.domain.entity

import com.example.backend.domain.model.BoardModel
import com.example.backend.domain.model.UserModel
import jakarta.persistence.*
import org.apache.catalina.User

@Table(name = "Board_Table")
@Entity
data class BoardEntity (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    val title: String,
    val text : String,

    @ManyToOne
    @JoinColumn(name = "user_id") // 사용자 ID와 연결된 외래 키 컬럼명
    val  user:UserEntity

){
    constructor(title: String,text: String,user: UserEntity):this(null,title,text,user)

    fun toModel(): BoardModel {
        return BoardModel(this.title,this.text,this.user.toModel())
    }
}