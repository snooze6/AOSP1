package org.arman.services;
import org.arman.data.model.Resultado;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
import java.util.*;
import java.util.logging.Logger;

/**
 * Created by arman on 20/09/2016.
 */
@WebService()
public class Utils {
  private static final Logger Console = Logger.getLogger( HelloWorld.class.getName() );

  private Map<String, Integer> count_words(String txt){
    Map<String,Integer> words_count = new HashMap<String,Integer>();
    String[] palabras = txt.split("\\s+");
    for (String s : palabras) {
      if (words_count.keySet().contains(s)) {
        Integer count = words_count.get(s) + 1;
        words_count.put(s, count);
      } else
        words_count.put(s, 1);
    }
    return words_count;
  }

  private String get_most_frequent(Map<String, Integer> words_count){
    Integer frequency = null;
    String mostFrequent = null;
    for(String s : words_count.keySet()){
      Integer i = words_count.get(s);
      if(frequency == null) {
        frequency = i;
        mostFrequent = s;
      }
      if(i > frequency) {
        frequency = i;
        mostFrequent = s;
      }
    }
    return mostFrequent;
  }

  @WebMethod
  public Resultado stats(String txt, String word) {
    if (txt != null){
      String trimmed = txt.replaceAll("[^\\dA-Za-z ]", "").toLowerCase().trim();
      int words = trimmed.isEmpty() ? 0 : trimmed.split("\\s+").length, chars = txt.length();

//      System.out.println(txt);
//
//      System.out.println("Palabras:   "+words);
//      System.out.println("Caracteres: "+chars);

      Map<String, Integer> count = count_words(txt.replaceAll("[^\\dA-Za-z ]", "").toLowerCase());
//      System.out.println("Keys: "+count.keySet().size());
      String maxword = get_most_frequent(count);
//      System.out.println("Más usada:  "+maxword);

      if (word == null || Objects.equals(word, "") || !count.keySet().contains(word)){
        word = maxword;
      }
//      System.out.println("Palabra:     "+word);

      float frec1 = ((float)count.get(maxword)/words)*100, frec2 = ((float)count.get(word)/words)*100;

//      System.out.println("Frequency:  "+frec2+"%");
//      System.out.println("        (De "+word+")");
//      System.out.println("        ( # "+count.get(word)+"%");
//
//      System.out.println("Frequency:  "+frec1+"%");
//      System.out.println("        (De "+maxword+")");
//      System.out.println("        ( # "+count.get(maxword)+"%");

      return new Resultado(words, chars, frec2, frec1, maxword);
    } else {
      return new Resultado(0,0,0,0,null);
    }
  }

  @WebMethod
  public int length(String s) {
    if (s!=null) {
      return s.length();
    } else {
      return 0;
    }
  }

  @WebMethod
  public Float[] change(Float[] nums, String i, String o) throws Exception {
    String currencies = "€$";
    System.out.println(i+" -> "+o);
    if (currencies.contains(i) && currencies.contains(o)){
      Float[] ret = new Float[nums.length];
      if (Objects.equals(i, "$") && Objects.equals(o, "€")){
        System.out.println("$ -> €");
        for (int k=0; k<nums.length; k++){
          ret[k] = 0.93f * nums[k];
        }
        return ret;
      } else if (Objects.equals(o, "$") && Objects.equals(i, "€")){
        System.out.println("€ -> $");
        for (int k=0; k<nums.length; k++){
          ret[k] = 1.07f * nums[k];
        }
        return ret;
      } else {
        System.out.println("Not changing anything");
        return nums;
      }
    } else {
      throw new Exception("Unsupported currency");
    }
  }



//  public static void main(String ...args){
////    String txt = "Pablito clavó un clavito, ¿qué clavito clavó Pablito?, el clavito que Pablito clavó, era el clavito de Pablito.",
////            word = "pablito";
////    String txt = "caca caca caca",
////            word = "caca";
////    Resultado r = stats(txt, word);
//
////    System.out.println("Palabras:   "+r.words);
////    System.out.println("Caracteres: "+r.chars);
////    System.out.println("Frequency:  "+r.frec1+"%");
////    System.out.println("        (De "+word+")");
////    System.out.println("Más usada:  "+r.maxword);
////    System.out.println("Frequency:  "+r.frec2+"%");
////    System.out.println("        (De "+r.maxword+")");
//
//    Float[] j = new Float[]{1.0f, 2.0f, 3.0f, 4.0f};
//    Float[] f = null;
//    try {
//      f = change(j, '€', '$');
//    } catch (Exception e) {
//      e.printStackTrace();
//    }
//    for (Float k:f ) {
//      System.out.println(k);
//    }
//  }
//
}
