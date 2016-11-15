package org.arman.services;

import org.arman.data.model.Dummy;
import org.arman.data.model.Item;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.ArrayList;

import static org.arman.data.model.User.print;

/**
 * Created by Snooze on 15/11/2016.
 */
@WebService()
public class Shop {

    @WebMethod
    public Item[] getItems(String token){
        print(token, "getting Items");
        return Dummy.items;
    }

    @WebMethod
    public Item getItemId(int id, String token){
        print(token, "getting Item "+id);

        for (Item i: Dummy.items){
            if (i.id == id){
                return i;
            }
        }
        return null;
    }

    @WebMethod
    public Item[] getItemAutor(String autor){
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
    }
}
