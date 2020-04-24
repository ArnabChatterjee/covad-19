package com.cognizant.covid.beans;
import java.util.List;

public class PopularTimes {
	
	private String weekDay;
	private List<Occupancy> occupancy;
	
	public String getWeekDay() {
		return weekDay;
	}
	public void setWeekDay(String weekDay) {
		this.weekDay = weekDay;
	}
	public List<Occupancy> getOccupancy() {
		return occupancy;
	}
	public void setOccupancy(List<Occupancy> occupancy) {
		this.occupancy = occupancy;
	}
}