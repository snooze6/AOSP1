package example;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

/**
 * Created by arman on 20/09/2016.
 */
@WebService()
public class HelloWorld {
  @WebMethod
  public String sayHelloWorldFrom(String from) {
    String result = "Hello, world, from " + from;
    System.out.println(result);
    return result;
  }

  @WebMethod
  public String hello() {
    System.out.println("Hallo world!");
    return "Hallo world!";
  }
  public static void main(String[] argv) {
    Object implementor = new HelloWorld ();
    String address = "http://localhost:9000/HelloWorld";
    System.out.println("Listening in on port");
    System.out.println(" - http://localhost:9000/HelloWorld");
    Endpoint.publish(address, implementor);
  }
}
