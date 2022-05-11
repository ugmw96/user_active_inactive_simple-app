package com.example.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.spring.entity.User;

public interface UsersDao extends JpaRepository<User, Long> {

	

}
