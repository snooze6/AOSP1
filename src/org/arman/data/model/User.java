package org.arman.data.model;

/**
 * Created by arman on 15/11/2016.
 */
public class User {
    public String username, password, token;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.token = "";
    }
}
