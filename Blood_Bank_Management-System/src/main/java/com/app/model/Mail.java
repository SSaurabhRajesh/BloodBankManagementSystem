package com.app.model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;


public class Mail {
	private String email="";
	

    @Autowired
    private JavaMailSender javaMailSender;
public Mail() {
	
}


    public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

    
        public void sendEmail() {
	   System.out.println("Sending Email...");
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo();

        msg.setSubject("Testing Phase");
        msg.setText("Hello!!! \n Thank You for Registering!!!");

        javaMailSender.send(msg);
        System.out.println("Done");
    }

}
