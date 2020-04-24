/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.cognizant.covid.controller;

import java.util.List;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.covid.beans.PopularTimes;
import com.cognizant.covid.service.TimesService;

@RestController
public class TimesController {
    
    @Autowired
    private TimesService service;
       
   
    @GetMapping("/popularTimes")
    @ResponseBody
    public List<PopularTimes> getPopularTimes(@RequestParam(value = "placeId") String placeId) throws JSONException{
        return service.get_populartimes("AIzaSyA5JR_FQhzrHrFZAtjDrUtlJf1IBka9HvE", placeId);
    }
}
