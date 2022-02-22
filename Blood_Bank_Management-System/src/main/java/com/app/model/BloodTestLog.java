package com.app.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bloodtestlog")
public class BloodTestLog {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	@Column(name="id")
	private long id;
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id")
	private User user;
	@Column(name="hepatitisb")
	private Boolean hepatitisB;
	@Column(name="hepatitisc")
	private Boolean hepatitisC;
	@Column(name="hiv")
	private Boolean hiv;
	@Column(name="syphilis")
	private Boolean syphilis;
	@Column(name="maleria")
	private Boolean maleria;
	public BloodTestLog() {
		// TODO Auto-generated constructor stub
	}
	
	public BloodTestLog(long id, User user, Boolean hepatitisB, Boolean hepatitisC, Boolean hiv, Boolean syphilis,
			Boolean maleria) {
		super();
		this.id = id;
		this.user = user;
		this.hepatitisB = hepatitisB;
		this.hepatitisC = hepatitisC;
		this.hiv = hiv;
		this.syphilis = syphilis;
		this.maleria = maleria;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Boolean getHepatitisB() {
		return hepatitisB;
	}
	public void setHepatitisB(Boolean hepatitisB) {
		this.hepatitisB = hepatitisB;
	}
	public Boolean getHepatitisC() {
		return hepatitisC;
	}
	public void setHepatitisC(Boolean hepatitisC) {
		this.hepatitisC = hepatitisC;
	}
	public Boolean getHiv() {
		return hiv;
	}
	public void setHiv(Boolean hiv) {
		this.hiv = hiv;
	}
	public Boolean getSyphilis() {
		return syphilis;
	}
	public void setSyphilis(Boolean syphilis) {
		this.syphilis = syphilis;
	}
	public Boolean getMaleria() {
		return maleria;
	}
	public void setMaleria(Boolean maleria) {
		this.maleria = maleria;
	}
	
}
