package org.arman.data.model;

/**
 * Created by Snooze on 15/11/2016.
 */
public class Item {
    public int id;
    public String name;
    public float price;
    public String description;
    public String image;
    public String autor;
    public String imageLong;

    public Item(int id, String name, float price, String description, String image, String autor, String imageLong) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.autor = autor;
        this.imageLong = imageLong;
    }
}
