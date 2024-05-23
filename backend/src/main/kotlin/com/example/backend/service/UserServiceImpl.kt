package com.example.backend.service

import com.example.backend.domain.entity.UserEntity
import com.example.backend.domain.model.UserModel
import com.example.backend.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatusCode
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserServiceImpl(private val userRepository: UserRepository): UserService {

    override fun userLogin(identification: String, password: String): UserEntity? {
      val user:UserEntity? =  userRepository.findByIdentification(identification)
        return if(user !=null){
            if (BCryptPasswordEncoder().matches(password,user.password)) user else null
        }else{
            null
        }
    }

    override fun userJoin(userModel: UserModel):Boolean {
        val isValid = userCheckId(userModel.userIdentification)
        return if(isValid){
            userRepository.save(userModel.toEntity())
            true
        }else{
            false
        }

    }

    override fun userCheckId(identification: String):Boolean {
        val userEntity:UserEntity? = userRepository.findByIdentification(identification)
        return userEntity == null
    }

    override fun findByIdentification(identification: String): UserEntity? {
        return userRepository.findByIdentification(identification)
    }
}