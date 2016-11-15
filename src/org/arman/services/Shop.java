package org.arman.services;

import org.arman.data.model.Dummy;
import org.arman.data.model.Item;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

/**
 * Created by Snooze on 15/11/2016.
 */
@WebService()
public class Shop {

    @WebMethod
    public Item[] getItems(){
        return Dummy.items;
    }

    public static void main(String[] argv) {
        Object implementor = new Shop();
        String address = "http://localhost:8080/org.arman.services/Shop";
        System.out.println("Listening in on port");
        System.out.println(" - "+address);
        Endpoint.publish(address, implementor);
    }
}
