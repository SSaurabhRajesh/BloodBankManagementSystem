package com.app.model;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="name")
	private String name;
	@Column(name="gender")
	private String gender;
	@Column(name="bloodgroup")
	private String blood_group;
	@Column(name="address")
	private String address;
	@Column(name="password")
	private String password;
	@Column(name="mobileno")
	private long mobile;
	@Column(name="email")
	private String email;
	@Column(name="date")
	private LocalDate Ddate;
	@Column(name="subscribe")
	private Boolean subscribe;
	@Enumerated(EnumType.STRING)
	@Column(name="role")
	private Role role;
	public User() {
		// TODO Auto-generated constructor stub
	}
	public User(String name, String gender, String blood_group, String address, String username, String password,
			int mobile, String email, LocalDate ddate, Boolean subscribe,Role role) {
		super();
		this.name = name;
		this.gender = gender;
		this.blood_group = blood_group;
		this.address = address;
		this.password = password;
		this.mobile = mobile;
		this.email = email;
		Ddate = ddate;
		this.subscribe = subscribe;
		this.role=role;
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBlood_group() {
		return blood_group;
	}
	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public LocalDate getDdate() {
		return Ddate;
	}
	public void setDdate(LocalDate ddate) {
		Ddate = ddate;
	}
	public Boolean getSubscribe() {
		return subscribe;
	}
	public void setSubscribe(Boolean subscribe) {
		this.subscribe = subscribe;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	
}
