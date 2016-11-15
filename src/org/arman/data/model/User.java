package org.arman.data.model;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

/**
 * Created by arman on 15/11/2016.
 */
public class User {
    public String username;
    public String password;
    public String token;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.token = hashing();
    }

    private String hashing(){
        String toEnc = this.username+':'+this.password; // Value to hash
        MessageDigest mdEnc = null;
        try {
            mdEnc = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        if (mdEnc != null) {
            mdEnc.update(toEnc.getBytes(), 0, toEnc.length());
            String md5 = new BigInteger(1, mdEnc.digest()).toString(16); // Hash value
            return md5;
        } else {
            return "";
        }

    }


}
