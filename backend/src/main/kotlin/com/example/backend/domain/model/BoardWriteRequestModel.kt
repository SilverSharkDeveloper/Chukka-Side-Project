package com.example.backend.domain.model

data class BoardWriteRequestModel (
    val userIdentification:String,
    val title:String,
    val text:String
)