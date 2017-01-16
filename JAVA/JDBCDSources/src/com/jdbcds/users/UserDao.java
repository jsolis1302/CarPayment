/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jdbcds.users;

import com.jdbcds.DataSource.DataSourceFactory;
import java.math.BigInteger;

import java.sql.SQLException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.Statement;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import static javax.management.Query.lt;


import javax.sql.DataSource;

/**
 *
 * @author jsolis
 */
public class UserDao {
    
    public UserDao()
    {
        
    }
    
    public boolean insert (User user)
    {
        boolean inserted = false;
        DataSource ds = DataSourceFactory.getDataSource("mysql");
	Connection con = null;
	PreparedStatement stmt = null;
        if(!UserExists(user))
        {
            try
                {
                    String sql = "INSERT INTO tbl_users(login,name,lastname,password)"
                            + "Values(?,?,?,?)";
                    con = ds.getConnection();
                    stmt = con.prepareStatement(sql);

                    stmt.setString(1, user.getLogin());
                    stmt.setString(2, user.getFname());
                    stmt.setString(3, user.getLname());
                    stmt.setString(4, getMD5(user.getPassword()));

                    stmt.executeUpdate();
                    System.out.println("Data Inserted");
                    inserted = true;
                    

                }
                catch(SQLException e)
                {
                    e.getErrorCode();

                }
                finally
                {
                    try {

                        if(stmt != null) stmt.close();
                        if(con != null) con.close();
                    } 
                    catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            return inserted;
        } else
            System.out.println("user already exist");
            return inserted;
	
    }
    
    private boolean UserExists(User user)
    {
        boolean user_exists = false;
        
        DataSource ds = DataSourceFactory.getDataSource("mysql");
	Connection con = null;
	PreparedStatement stmt = null;	
	ResultSet rs = null;
		
		try
		{
                    con = ds.getConnection();
                    String sql = "select login from tbl_users  where login = ?";

                    stmt = con.prepareStatement(sql);
                    stmt.setString(1, user.getLogin());
                    rs = stmt.executeQuery();
                    if(rs.next())
                    {
                        user_exists = true;
                        return user_exists;
                    }
			
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			
		}
		finally
		{
			try {
				if(rs != null) rs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
        
        return user_exists;
    }
    
    private static String getMD5(String input)
    {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger number = new BigInteger(1, messageDigest);
            String hashtext = number.toString(16);

            while (hashtext.length()<32) {
                hashtext = "0" + hashtext;
            }
            return hashtext;
            }
            catch (NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }
    }
}
