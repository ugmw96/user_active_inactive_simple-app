package com.example.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.dao.UsersDao;
import com.example.spring.entity.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UsersDao userRepo;
	
	@RequestMapping(path="/users")
	public List<User> getAllUsers(){
		return userRepo.findAll();
	}
	
	@RequestMapping(path="/user")
	public User createUser(@RequestBody User user) {
		return userRepo.save(user);
	}
	
	@RequestMapping(path="/user/{id}")
	public Optional<User> getUser(@PathVariable("id") Long id) {
		return userRepo.findById(id);
	}
	@RequestMapping(path="/user/delete/{id}")
	public void deleteUser(@PathVariable("id") Long id) {
		userRepo.deleteById(id);
		System.out.print(id+" User Deleted");
	}
	
	@RequestMapping(path="/user/delete/all")
	public void deleteAllUsers() {
		userRepo.deleteAll();
		System.out.print(" Users Deleted");
	}
}









