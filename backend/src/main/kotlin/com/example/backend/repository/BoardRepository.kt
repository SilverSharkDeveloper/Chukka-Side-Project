package com.example.backend.repository

import com.example.backend.domain.entity.BoardEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface BoardRepository : JpaRepository<BoardEntity, Long> {

}