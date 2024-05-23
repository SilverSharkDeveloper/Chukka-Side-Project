package com.example.backend.service

import com.example.backend.domain.model.BoardModel

interface BoardService {
    fun boardWrite(boardModel:BoardModel)
    fun boardList():List<BoardModel>
}