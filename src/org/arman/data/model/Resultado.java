package org.arman.data.model;

/**
 * Created by Snooze on 15/11/2016.
 */
public class Resultado {

    public int words, chars;
    public float frec1, frec2;
    public String maxword;

    public Resultado(int words, int chars, float frec1, float frec2, String maxword) {
        this.words = words;
        this.chars = chars;
        this.frec1 = frec1;
        this.frec2 = frec2;
        this.maxword = maxword;
    }

}
