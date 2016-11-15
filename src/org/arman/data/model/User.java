package org.arman.data.model;

/**
 * Created by arman on 15/11/2016.
 */
public class User {
    public String username;
    public String password;
    public int token;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.token = (username+':'+password).hashCode();
    }
}
