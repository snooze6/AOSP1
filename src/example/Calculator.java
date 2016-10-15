package example;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

/**
 * Created by arman on 20/09/2016.
 */
@WebService()
public class Calculator {
  @WebMethod
  public float sum(float a, float b) {
    return a+b;
  }

  @WebMethod
  public float les(float a, float b){
    return a-b;
  }

  public static void main(String[] argv) {
    Object implementor = new Calculator();
    String address = "http://localhost:9000/HelloWorld";
    System.out.println("Listening in on port");
    System.out.println(" - http://localhost:9000/HelloWorld");
    Endpoint.publish(address, implementor);
  }
}
