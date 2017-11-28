package com.nozama.nozama.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.nozama.nozama.domain.Item;
import com.nozama.nozama.domain.User;
import com.nozama.nozama.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(path = "user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path="/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<String> findByEmail(@RequestBody User user, HttpServletResponse resp) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode node = mapper.createObjectNode();
        String ret = null;
        User user1 = userService.getUserByEmail(user.getEmail());
        if (user1 == null){
            return new ResponseEntity<String>("User not found", HttpStatus.UNAUTHORIZED);
        } else if (!user.getPassword().equals(user1.getPassword())){
            return new ResponseEntity<String>("Password not match", HttpStatus.UNAUTHORIZED);
        }

            node.put("id", user1.getId());
            node.put("email",user1.getEmail());
            node.put("userrole",user1.getUserRole());
        try {
            ret = mapper.writeValueAsString(node);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<String>(ret, HttpStatus.OK);
    }

    @PostMapping(path="/profile", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType
            .APPLICATION_JSON_VALUE)
    public ResponseEntity<User> findProfileById (@RequestBody User user, HttpServletResponse resp) {
        ObjectMapper mapper = new ObjectMapper();
        String ret = null;
        User user1 = userService.getUserById(user.getId());
        user1.setPassword("");
        return new ResponseEntity<User>(user1, HttpStatus.OK);
    }

    @PostMapping(path = "/user/new")
    @ResponseBody
    public ResponseEntity submitNewUser( @RequestBody User user) {
        userService.insertUser(user);
        return new ResponseEntity(HttpStatus.OK);
    }

}
