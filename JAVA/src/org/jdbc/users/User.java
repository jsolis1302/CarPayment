/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.jdbc.users;

/**
 *
 * @author JorgeRaul
 */
public class User {
    private String login;
    private String fname;
    private String password;
    private String lname;
        
    public User(String login, String fname, String lname,String password){
		
	this.login = login;
	this.fname = fname;
	this.lname = lname;
	this.password = password;
		
	}
    public User(){
        
    }
	
    public String getLogin(){
	return login;
    }
	
    public String getFname(){
	return fname;
    }
	
    public String getLname(){
	return lname;
    }
	
    public String getPassword(){
	return password;
    }
    
    public void setLogin(String login)
    {
        this.login = login;
    }
    
     public void setFname(String fname)
    {
        this.fname = fname;
    }
     
    public void setLname(String lname)
    {
        this.lname = lname;
    }
    
    public void setpassword(String password)
    {
        this.password = password;
    }
}
