/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.springboot.SpringBootBase.controller;

import com.in28minutes.springboot.SpringBootBase.service.TimesService;
import com.in28minutes.springboot.SpringBootBase.utils.DataFileWriter;
import org.json.JSONArray;
import java.util.StringTokenizer;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

@RestController
public class TimesController {
    
    @Autowired
    TimesService service;
    
    String BASE_URL = "https://maps.googleapis.com/maps/api/place/";
    String RADAR_URL = BASE_URL + "radarsearch/json?location={},{}&radius={}&types={}&key={}";
    String NEARBY_URL = BASE_URL + "nearbysearch/json?location={},{}&radius={}&types={}&key={}";
    String DETAIL_URL = BASE_URL + "details/json?placeid={}&key={}";
    
    @GetMapping("/testMe")
    @ResponseBody
    public String testPage(){

        String uri = "http://labs.bible.org/api/?passage=Exodus%204:4";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }
    
    @GetMapping("/popularTimes")
    @ResponseBody
    public String getPopularTimes(@RequestParam(value = "placeId") String placeId) throws JSONException{
        //ChIJHzaQRl8J9YgRLOzfDhkxB7k  ChIJ6XB-ZRAR9YgRB2YIjZPM9DM
        JSONObject result = service.get_populartimes("AIzaSyA5JR_FQhzrHrFZAtjDrUtlJf1IBka9HvE", placeId);

        String returnArray = result.get("d").toString().substring(4);
        returnArray = returnArray.substring(returnArray.indexOf(placeId));
        
        return converter(returnArray);//converter(result);
        // arrays.asList();
        // return JSONOjbect
    }
    private String converter(String in) throws JSONException{
        in = in.replaceAll("\\[", "");
        in = in.replaceAll("\\]", "");
        in = in.replaceAll("\"", "");
        
        String[] split = in.split(",");
              
        createJSON(split);
        StringBuffer total = new StringBuffer();
        for(int i=0; i < split.length; i++){
            total.append( i +" : " + split[i] + "<br>");
        }
        return total.toString();
    }
    
   private void createJSON(String[] detail) throws JSONException{
       JSONObject base = new JSONObject();
       base.put("name", detail[1940]);
       
       JSONArray add = new JSONArray();
       add.put(detail[1941]);
       add.put(detail[1942]);
       add.put(detail[1943]);
       base.put("address", add);
       
       base.put("placeId", detail[0]);
       
       DataFileWriter.writeText(base.toString());
    }

}
