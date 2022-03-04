//package com.app.rest;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//
//import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;
//import java.io.IOException;
//
//@SpringBootApplication
//public class Mail {
//
//    @Autowired
//    private JavaMailSender javaMailSender;
//
////    public static void main(String[] args) {
////        SpringApplication.run(Application.class, args);
////    }
//
//
//        public void sendEmail() {
//	   System.out.println("Sending Email...");
//        SimpleMailMessage msg = new SimpleMailMessage();
//        msg.setTo("saurabh.sonale@gmail.com", "piyushsonale@gmail.com");
//
//        msg.setSubject("Testing Phase");
//        msg.setText("Hello World \n Spring Boot Email");
//
//        javaMailSender.send(msg);
//        System.out.println("Done");
//    }
//
//
//
////    void sendEmailWithAttachment() throws MessagingException, IOException {
////
////        MimeMessage msg = javaMailSender.createMimeMessage();
////
////        // true = multipart message
////        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
////        helper.setTo("sanryrs@gmail.com");
////
////        helper.setSubject("Testing from Spring Boot");
////
////        // default = text/plain
////        //helper.setText("Check attachment for image!");
////
////        // true = text/html
////        helper.setText("<h1>Check attachment for image!</h1>", true);
////
////        helper.addAttachment("my_photo.png", new ClassPathResource("android.png"));
////
////        javaMailSender.send(msg);
////
////    }
//}