package com.example.backend.service

import com.example.backend.domain.model.BoardModel
import com.example.backend.repository.BoardRepository
import org.springframework.stereotype.Service

@Service
class BoardServiceImpl(private val boardRepository: BoardRepository) :BoardService{
    override fun boardWrite(boardModel: BoardModel) {
        boardRepository.save(boardModel.toEntity())
    }

    override fun boardList(): List<BoardModel> {
      return boardRepository.findAll().map { it.toModel() }
    }
}