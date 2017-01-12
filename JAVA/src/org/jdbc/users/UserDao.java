/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.jdbc.users;

import java.sql.SQLException;
import javax.sql.DataSource;
import java.sql.Connection;
//import java.sql.ResultSet;
//import java.sql.Statement;
import java.sql.PreparedStatement;

/**
 *
 * @author JorgeRaul
 */
public class UserDao {
    
    public UserDao(){
        
    }
    
    public void insert(User user){
        
        DataSource ds = null;
        ds = MyDataSourceFactory.getMySQLDataSource();
        Connection con = null;
	//Statement stmt = null;
        PreparedStatement stmt = null;
	//ResultSet rs = null;
        java.util.Date today = new java.util.Date();
        try 
        {
	    con = ds.getConnection();
	    //stmt = con.createStatement();
            
            /*String sql = "INSERT INTO tbl_users (login,password,name,lastname,birthdate)"
                    + "values( ' "+user.getLogin()+" ',"
                    +" ' "+ user.getPassword()+"',"
                    +" ' "+ user.getFname()+"',"
                    +" ' "+ user.getLname()+"',"
                    +"'2016-12-01 00:00:00')";*/
            String sql = "INSERT INTO tbl_users (login,password,name,lastname,birthdate)"
                    + "VALUES(?,?,?,?,?)";
            
            stmt = con.prepareStatement(sql);
            
            stmt.setString(1,user.getLogin());
            stmt.setString(2,user.getPassword());
            stmt.setString(3,user.getFname());
            stmt.setString(4,user.getLname());
            stmt.setTimestamp(5,getCurrentTimeStamp());
            
            stmt.executeUpdate();
            System.out.println("User Inserted correctly");
	    
	} 
        catch (SQLException e) 
        {
	    e.printStackTrace();
	}
        finally{
            try {
                    if(stmt != null) stmt.close();
                    if(con != null) con.close();
            } catch (SQLException e) {
                    e.printStackTrace();
            }
	}
    }
    
    	private static java.sql.Timestamp getCurrentTimeStamp() {

		java.util.Date today = new java.util.Date();
		return new java.sql.Timestamp(today.getTime());

	}
    
}
