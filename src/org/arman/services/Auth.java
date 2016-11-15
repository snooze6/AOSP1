package org.arman.services;

import org.arman.data.model.User;

import javax.jws.WebMethod;
import javax.jws.WebService;
import java.util.ArrayList;
import java.util.Objects;

import static org.arman.data.model.Dummy.users;

/**
 * Created by Snooze on 15/11/2016.
 */
@WebService()
public class Auth {

    private String getToken(User j){
        for (User u: users){
            if (Objects.equals(u.username, j.username) && Objects.equals(u.password, j.password)){
                return u.token;
            }
        }
        return null;
    }

    private User getUser(String username, String password){
        for (User u: users){
            if (Objects.equals(u.username, username) && Objects.equals(u.password, password)){
                return u;
            }
        }
        return null;
    }

//    @WebMethod
//    public ArrayList<User> getUsers(){
//        return users;
//    }

    @WebMethod
    public  String login(String username, String password){
        User a = new User(username, password);
        String token = getToken(a);
        if (token != null){
            return token;
        } else {
            return "";
        }
    }

    @WebMethod
    public String register(String username, String password){
        User a = new User(username, password);
        String token = getToken(a);
        if (token != null){
            return "";
        } else {
            users.add(a);
            return a.token;
        }
    }

    @WebMethod
    public boolean valid(String token){
        for (User u: users){
            if (Objects.equals(u.token, token)){
                return true;
            }
        }
        return false;
    }
}
