/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.springboot.SpringBootBase.utils;

import java.io.FileWriter;
import java.io.IOException;  

/**
 *
 * @author clarke
 */
public class DataFileWriter {

    public static void writeText(String in){
        try {
          FileWriter myWriter = new FileWriter("filename.txt");
          myWriter.write(in);
          myWriter.close();
          System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        }
  }
}

