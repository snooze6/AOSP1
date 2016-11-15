package org.arman.services;

import org.arman.data.model.Dummy;
import org.arman.data.model.Item;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.ArrayList;

/**
 * Created by Snooze on 15/11/2016.
 */
@WebService()
public class Shop {

    @WebMethod
    public Item[] getItems(){
        return Dummy.items;
    }

    @WebMethod
    public Item getItemId(int id){
        for (Item i: Dummy.items){
            if (i.id == id){
                return i;
            }
        }
        return null;
    }

    @WebMethod
    public Item[] getItemAutor(String autor){
        System.out.println("getItems: "+autor);
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

    public static void main(String[] argv) {
        Object implementor = new Shop();
        String address = "http://localhost:8080/org.arman.services/Shop";
        System.out.println("Listening in on port");
        System.out.println(" - "+address);
        Endpoint.publish(address, implementor);
    }
}
