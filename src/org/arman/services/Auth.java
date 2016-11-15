package org.arman.services;

import org.arman.data.model.Dummy;
import org.arman.data.model.Item;
import org.arman.data.model.User;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.ArrayList;

import static org.arman.data.model.Dummy.users;

/**
 * Created by Snooze on 15/11/2016.
 */
@WebService()
public class Auth {

    public boolean isAlready(User j){
        for (User u: users){
            if (u.token == j.token){
                return true;
            }
        }
        return false;
    }

    @WebMethod
    public int login(String username, String password){
        User a = new User(username, password);
        if (isAlready(a)){
            return a.token;
        } else {
            return 0;
        }
    }

    @WebMethod
    public int register(String username, String password){
        User a = new User(username, password);
        if (isAlready(a)){
            return 0;
        } else {
            users.add(a);
            return a.token;
        }
    }

    @WebMethod
    public boolean valid(int token){
        for (User u: users){
            if (u.token == token){
                return true;
            }
        }
        return false;
    }



}
