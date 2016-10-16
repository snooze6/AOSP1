package org.arman.services;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.logging.Logger;

/**
 * Created by arman on 20/09/2016.
 */
@WebService()
public class Calculator {
  private static final Logger Console = Logger.getLogger( HelloWorld.class.getName() );

  @WebMethod
  public float sum(float a, float b) {
    Console.warning("Called - Suma:"+(a+b));
    return a+b;
  }

  @WebMethod
  public float les(float a, float b){
    return a-b;
  }

  @WebMethod
  public float prod(float a, float b){
    return a*b;
  }

  @WebMethod
  public float div(float a, float b){
    return a/b;
  }

  public static void main(String[] argv) {
    Object implementor = new Calculator();
    String address = "http://localhost:8080/org.arman.services/Calculator";
    System.out.println("Listening in on port");
    System.out.println(" - "+address);
    Endpoint.publish(address, implementor);
  }
}
