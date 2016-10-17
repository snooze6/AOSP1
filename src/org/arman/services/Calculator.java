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

  @WebMethod
  public float min(float[] a){
    if (a.length > 0) {
      float sum = a[0];
      for (float anA : a) {
        if (anA < sum) {
          sum = anA;
        }
      }
      return sum;
    } else {
      return 0;
    }
  }

  @WebMethod
  public float avg(float[] a){
    Console.warning("Called - Avg: ");
    for (float anA : a){
      Console.warning(""+anA);
    }
    float sum = 0;
    for (float anA : a) {
      sum += anA;
    }
    if (a.length != 0) {
      return sum / a.length;
    } else {
      return 0;
    }
  }
  @WebMethod
  public float[] aavg(){
    return new float[]{1,2,3};
  }

  @WebMethod
  public float max(float[] a){
    if (a.length > 0) {
      float sum = a[0];
      for (float anA : a) {
        if (anA > sum) {
          sum = anA;
        }
      }
      return sum;
    } else {
      return 0;
    }
  }

  public static void main(String[] argv) {
    Object implementor = new Calculator();
    String address = "http://localhost:8080/org.arman.services/Calculator";
    System.out.println("Listening in on port");
    System.out.println(" - "+address);
    Endpoint.publish(address, implementor);
  }
}
