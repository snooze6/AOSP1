package org.arman.services;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.logging.Logger;

import static org.arman.data.model.User.print;

/**
 * Created by arman on 20/09/2016.
 */
@WebService()
public class Calculator {
  private static final Logger Console = Logger.getLogger( HelloWorld.class.getName() );

  @WebMethod
  public float sum(float a, float b, String token) {
    print(token, "Adding "+a+"+"+b);
    return a+b;
  }

  @WebMethod
  public float les(float a, float b, String token){
    print(token, "Subtracting "+a+"-"+b);
    return a-b;
  }

  @WebMethod
  public float prod(float a, float b, String token){
    print(token, "Multiply "+a+"*"+b);
    return a*b;
  }

  @WebMethod
  public float div(float a, float b, String token){
    print(token, "Divide "+a+"/"+b);
    return a/b;
  }

  @WebMethod
  public float min(float[] a, String token){
    print(token, "Called min");
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
  public float avg(float[] a, String token){
    print(token, "Called avg");
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
  public float max(float[] a, String token){
    print(token, "Called max");
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
}
