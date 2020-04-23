# Submission name

[![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://callforcode.org/slack) [![Website](https://img.shields.io/badge/View-Website-blue)](https://github.com/ArnabChatterjee/covad-19)

GitHub repository for Call for Code of IBM open source application for Covid-19 issue.

## Contents

1. [Short description](#short-description)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Demo Video](#demo-video)
1. [Getting started](#getting-started)
1. [Built with](#built-with)
1. [Authors](#authors)

## Short description

### What's the problem?

Part of the World Health Organization guidance on limiting further spread of COVID-19 is to practice social distancing. However there are a lot of necessary duties that can not avoid them for long time such as shopping from groceries. Reduction of population who have to refer to some location and divide them to smaller group that can refer to different times will reduce the risk of Coronavirus more

### How can technology help?

Shopping risk calculator is a web application that calculates the minimum risk of coronavirus coronavirus in the supermarkets and shopping centers live and suggest times with minimum risk.

### The idea

Goal: minimum contact between people/ find safest place and time for shopping, walking, some kind of works, hospitals and... /

 Google has a crowdSource API to get signals of smart phones and by calculating amount of them and the speed of these smart phones will determine traffic of roads, 
 There is another API to access Coronavirus cases in each zip code
 So we can use it to count MINIMUM population of shopping centers.

 ### Demo Video

 [![Watch the video](https://github.com/kmaryam27/covad-19/blob/master/assets/2.png)](https://drive.google.com/file/d/1YW2WvIu1D_2626bdOCFXMZ5sNwh9zMh_/view?usp=sharing)

## The architecture

1. The user navigates to the site and search for a shopping center.
2. front-end send location information for backend part.
3. backend will serch grab data from multiple API, calculates lactions risk and returns data to front-end.
4. User can access to live data and make a decition to strat trip to the selected location or not.

## Long description

[More detail is available here](DESCRIPTION.md)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```bash
Node install 
Yarn install
```

### Installing

1- Clone repository to your PC
2- Use `yarn install` or `npm install` to install dependencies
3- Get a google API Key from https://cloud.google.com/maps-platform/?apis=map
4- Add api key to back end 
4-use `yarn start` or `npm start` to run 

## Built with

* [IBM Watson assistant](https://cloud.ibm.com/catalog?search=api%20connect#search_results) -for chatbot
* [google map API](https://www.google.com/maps) - back end data
* [React](https://reactjs.org/) - Front end library

## Authors

* **Arnab Chatterjee (Cognizant)** -  [Email] (Arnab.Chatterjee6@cognizant.com)
* **Roy Tan (Cognizant)** -  [Email] (Roy.Tan2@cognizant.com> 

* **Maryam Keshavarz (Cognizant)** -  [Email] (Maryam.Keshavarz@cognizant.com) 

* **Nadine Hernandez (Cognizant)** -  [Email] (Nadine.Hernandez@cognizant.com)

* **Clarke Swindell (Cognizant)** -  [Email] (Clarke.Swindell@cognizant.com)


