/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.springboot.SpringBootBase.service;

import com.in28minutes.springboot.SpringBootBase.utils.DataFileWriter;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;


@Service
public class TimesService {
   private String BASE_URL = "https://maps.googleapis.com/maps/api/place/";
   private String RADAR_URL = BASE_URL + "radarsearch/json?location={},{}&radius={}&types={}&key={}";
   private String NEARBY_URL = BASE_URL + "nearbysearch/json?location={},{}&radius={}&types={}&key={}";
   private String DETAIL_URL = BASE_URL + "details/json?placeid=%1$s&key=%2$s";

   // user agent for populartimes request
   private String     USER_AGENT = "\"User-Agent\": \"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) "+
                                                           "AppleWebKit/537.36 (KHTML, like Gecko) "+
                                                           "Chrome/54.0.2840.98 Safari/537.36";


   public JSONObject get_populartimes(String api_key, String place_id) {

      /*
      sends request to detail to get a search string
      and uses standard proto buffer to get additional information
      on the current status of popular times
      :return: json details
      */

      // places api - detail search
      // https://developers.google.com/places/web-service/details?hl=de

      String detail_str = String.format(DETAIL_URL, place_id, api_key);
      JSONObject detail = null;
      JSONObject result = null;
      System.out.println("detail_str: " + detail_str);
      
      try {
            detail = (JSONObject)getResponse(detail_str).get("result");
             //System.out.println(detail);
            result = get_populartimes_by_detail(detail);
      } catch (MalformedURLException e) {
            e.printStackTrace();
      } catch (Exception e) {
             e.printStackTrace();
      }

      return result;
   }

    private JSONObject get_populartimes_by_detail(JSONObject detail) throws Exception {
            String address = detail.getString("formatted_address");
            String place_identifier = detail.getString("name") + " "+ address;

            JSONObject detailJson = new JSONObject();
            detailJson.put("id", detail.get("place_id"));
            detailJson.put("name", detail.get("name"));
            detailJson.put("address", address);
            detailJson.put("types", detail.get("types"));
      //      detailJson.put("current_popularity", detail.get("current_popularity"));
      //      detailJson.put("populartimes", detail.get("populartimes"));
            detailJson.put("coordinates", ((JSONObject)detail.get("geometry")).get("location"));

            //add_optional_parameters(detail_json, detailJson, rating, rating_n, popularity, current_popularity, time_spent);
            //return detailJson;
            return get_populartimes_from_search(place_identifier);
    }

   private JSONObject get_populartimes_from_search(String placeIdentifier) throws Exception {
        Map<String,String> paramsUrl = new HashMap<String, String>();

         paramsUrl.put("tbm", "map");
         paramsUrl.put("tch", "1");
         paramsUrl.put("hl", "en");
         paramsUrl.put("q", URLEncoder.encode(placeIdentifier,"UTF-8"));
         paramsUrl.put("pb", "!4m12!1m3!1d4005.9771522653964!2d-122.42072974863942!3d37.8077459796541!2m3!1f0!2f0!3f0!3m2!1i1125!2i976"+
       "!4f13.1!7i20!10b1!12m6!2m3!5m1!6e2!20e3!10b1!16b1!19m3!2m2!1i392!2i106!20m61!2m2!1i203!2i100!3m2!2i4!5b1"+
       "!6m6!1m2!1i86!2i86!1m2!1i408!2i200!7m46!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e3!2b0!3e3!"+
       "1m3!1e4!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e3!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e"+
       "10!2b0!3e4!2b1!4b1!9b0!22m6!1sa9fVWea_MsX8adX8j8AE%3A1!2zMWk6Mix0OjExODg3LGU6MSxwOmE5ZlZXZWFfTXNYOGFkWDh"+
       "qOEFFOjE!7e81!12e3!17sa9fVWea_MsX8adX8j8AE%3A564!18e15!24m15!2b1!5m4!2b1!3b1!5b1!6b1!10m1!8e3!17b1!24b1!"+
       "25b1!26b1!30m1!2b1!36b1!26m3!2m2!1i80!2i92!30m28!1m6!1m2!1i0!2i0!2m2!1i458!2i976!1m6!1m2!1i1075!2i0!2m2!"+
       "1i1125!2i976!1m6!1m2!1i0!2i0!2m2!1i1125!2i20!1m6!1m2!1i0!2i956!2m2!1i1125!2i976!37m1!1e81!42b1!47m0!49m1"+
        "!3b1");

         StringBuffer search_url = new StringBuffer("");

         for(String keys: paramsUrl.keySet()) {
                       search_url.append("&");
                       search_url.append(keys);
                       search_url.append("=");
                       search_url.append(paramsUrl.get(keys));
         }

         String data = getURLData("https://www.google.de/search?"+search_url.toString());
         data = (URLDecoder.decode(data,"UTF-8"));
         System.out.println(search_url);
         //data = data.substring(4);

         JSONObject jData = new JSONObject(data);
         String d = jData.get("d").toString().substring(4);

         return jData;
   }



   private void add_optional_parameters(JSONObject detail_json, JSONObject detail, String rating, String rating_n, 
           String popularity, String current_popularity, String time_spent) throws JSONException{
        detail_json.put("rating", detail.get("rating"));
        detail_json.put("current_popularity", detail.get("current_popularity"));
        detail_json.put("populartimes", detail.get("populartimes"));
        detail_json.put("time_wait", detail.get("time_wait"));
        detail_json.put("time_spent", detail.get("time_spent"));

   }



   private JSONObject getResponse(String url) throws JSONException, Exception  {

      return new JSONObject(getURLData(url));

   }

   private String getURLData(String url) throws Exception{

      URL obj = new URL(url);
      HttpURLConnection con = (HttpURLConnection) obj.openConnection();

      // optional default is GET
      con.setRequestMethod("GET");

      //add request header
      con.setRequestProperty("User-Agent", "Mozilla/5.0");

      int responseCode = con.getResponseCode();
      System.out.println("\nSending 'GET' request to URL : " + url);
      System.out.println("Response Code : " + responseCode);

      BufferedReader in = new BufferedReader(
              new InputStreamReader(con.getInputStream()));

      String inputLine;
      StringBuffer response = new StringBuffer();

      while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);

      }

      in.close();
      return response.toString();
   }
}