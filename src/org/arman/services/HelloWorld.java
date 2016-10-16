package org.arman.services;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.logging.Logger;


/**
 * Created by arman on 20/09/2016.
 */
@WebService()
public class HelloWorld {
  private static final Logger Console = Logger.getLogger( HelloWorld.class.getName() );

  @WebMethod(operationName="SayHello")
  public String sayHello(@WebParam(name="name") String name){
    System.out.println("Hello " + name + "!");
    return "Hello " + name + "!";
  }

  @WebMethod
  public String hello() {
    Console.warning("Hello world");
    return "Hallo world!";
  }
  public static void main(String[] argv) {
    Object implementor = new HelloWorld ();
    String address = "http://localhost:8080/org.arman.services/HelloWorld";
    System.out.println("Listening in on port");
    System.out.println(" - "+address);
    Endpoint.publish(address, implementor);
  }
}
