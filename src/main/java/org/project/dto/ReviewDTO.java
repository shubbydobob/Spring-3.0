package org.project.dto;


public class ReviewDTO {
    private String engineerName;
    private String review;
	public String getEngineerName() {
		return engineerName;
	}
	public void setEngineerName(String engineerName) {
		this.engineerName = engineerName;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	@Override
	public String toString() {
		return "ReviewDTO [engineerName=" + engineerName + ", review=" + review + "]";
	}

}