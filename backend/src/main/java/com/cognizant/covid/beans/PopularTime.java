package com.cognizant.covid.beans;

import java.util.ArrayList;
import java.util.List;

public class PopularTime {
	private String currentOccupancy;
	private List<PopularTimes> popularTimesList = new ArrayList<PopularTimes>();
	
	public String getCurrentOccupancy() {
		return currentOccupancy;
	}
	public void setCurrentOccupancy(String currentOccupancy) {
		this.currentOccupancy = currentOccupancy;
	}
	public List<PopularTimes> getPopularTimesList() {
		return popularTimesList;
	}
	public void setPopularTimesList(List<PopularTimes> popularTimesList) {
		this.popularTimesList = popularTimesList;
	}
	
}
