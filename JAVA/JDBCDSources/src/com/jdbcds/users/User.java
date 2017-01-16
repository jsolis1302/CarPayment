/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jdbcds.users;

/**
 *
 * @author jsolis
 */
public class User {
    
    private int user_id;
    private String login;
    private String fname;
    private String lname;
    private String password;
    
    public User()
    {
        
    }
    
    //get Methods
    
    public int getUserID()
    {
        return user_id;
    }
    
    public String getLogin()
    {
        return login;
    }
    public String getFname()
    {
        return fname;
    }
    public String getLname()
    {
        return lname;
    }
    public String getPassword()
    {
        return password;
    }
    public String getFullName()
    {
        return fname+" "+lname;
    }
    
    //set Methods
    
    public void setUserID(int user_id)
    {
        this.user_id = user_id;
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
    public void setPassword(String password)
    {
        this.password = password;
    }
  
}
