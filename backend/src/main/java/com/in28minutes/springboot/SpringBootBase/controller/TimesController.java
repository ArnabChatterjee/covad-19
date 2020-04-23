/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.springboot.SpringBootBase.controller;

import com.in28minutes.springboot.SpringBootBase.service.TimesService;
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

        JSONObject result = service.get_populartimes("AIzaSyA5JR_FQhzrHrFZAtjDrUtlJf1IBka9HvE", "ChIJ6XB-ZRAR9YgRB2YIjZPM9DM");

        String d = result.get("d").toString().substring(4);
        String[] split = d.split(",");
                
        StringBuffer total = new StringBuffer();
        for(int i=0; i < split.length; i++){
            total.append("\n" + i +"  " + split[i]);
        }
        return total.toString();//converter(result);
        // arrays.asList();
        // return JSONOjbect
    }
    private String converter(JSONObject in) throws JSONException{
      //  in.put("title", in.get("Walmart"));
        return in.toString();
    }
    
//    private JSONObject tester() throws JSONException{
//        JSONArray jsonArr = new JSONArray("[{\"id\":[\"5\"]},{\"Tech\":[\"Java\"]}]");
//        JSONObject jObj = new JSONObject();
//        jObj.put("aoColumnDefs",(Object)jsonArr);
//        return jObj;
//    }

}
