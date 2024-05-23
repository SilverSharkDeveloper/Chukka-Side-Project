package com.example.backend.repository

import com.example.backend.domain.entity.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository :JpaRepository<UserEntity,Long> {
    fun findByIdentification(identification: String): UserEntity?

    fun findByIdentificationAndPassword(identification:String, password:String): UserEntity?
}