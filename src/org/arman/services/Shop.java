package org.arman.services;

import org.arman.data.model.Dummy;
import org.arman.data.model.Item;
import org.arman.data.model.User;

import javax.jws.WebMethod;
import javax.jws.WebService;
import java.util.ArrayList;
import java.util.Objects;

import static org.arman.data.model.Dummy.users;
import static org.arman.data.model.User.print;

/**
 * Created by Snooze on 15/11/2016.
 */
@WebService()
public class Shop {
    private boolean validate(String token){
        for (User u: users){
            if (Objects.equals(u.token, token)){
                print(token, "Tried to login verify");
                return true;
            }
        }
        return false;
    }
    @WebMethod
    public Item[] getItems(String token){
        print(token, "getting Items");
        if (validate(token)) {
            print(token, "getting Items");
            return Dummy.items;
        } else {
            return null;
        }
    }

    @WebMethod
    public Item getItemId(int id, String token){
        if (validate(token)) {
            print(token, "getting Item "+id);

            for (Item i: Dummy.items){
                if (i.id == id){
                    return i;
                }
            }
            return null;
        } else {
            return null;
        }
    }

    @WebMethod
    public Item[] getItemAutor(String autor, String token){
        if (validate(token)) {
            System.out.println("getting Item by autor "+autor);

            ArrayList<Item> ret = new ArrayList<>();
            for (Item i: Dummy.items){
                if (i.autor.toLowerCase().contains(autor)){
                    ret.add(i);
                }
            }
            Item[] ret1 = new Item[ret.size()]; int j = 0;
            for (Item i: ret){
                ret1[j]=i;
                j++;
            }
            return ret1;
        } else {
            return null;
        }
    }
}
