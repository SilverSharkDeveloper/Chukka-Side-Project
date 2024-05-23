package com.example.backend.controller

import com.example.backend.domain.Exception.UserNotFoundException
import com.example.backend.domain.entity.UserEntity
import com.example.backend.domain.model.BoardModel
import com.example.backend.domain.model.BoardWriteRequestModel
import com.example.backend.domain.model.LoginRequestModel
import com.example.backend.service.BoardService
import com.example.backend.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class BoardControllerr(
    val boardService: BoardService,
    val userService: UserService
) {

    @PostMapping("board/write")
    fun boardWrite(@RequestBody boardWriteRequestModel: BoardWriteRequestModel){
        val user = userService.findByIdentification(boardWriteRequestModel.userIdentification)?.toModel()
        val board = BoardModel(boardWriteRequestModel.title,boardWriteRequestModel.text,user!!)
        boardService.boardWrite(board)
    }

    @GetMapping("board/list")
    fun boardList():ResponseEntity<List<BoardModel>>{
        val boards = boardService.boardList()
        return  ResponseEntity.status(HttpStatus.OK).body(boards)
    }

}