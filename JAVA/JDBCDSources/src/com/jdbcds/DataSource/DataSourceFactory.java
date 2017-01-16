/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jdbcds.DataSource;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import javax.sql.DataSource;
import org.apache.commons.dbcp.BasicDataSource;

/**
 *
 * @author jsolis
 */
public class DataSourceFactory {
    
    public static DataSource getDataSource(String dbType){
		Properties props = new Properties();
		FileInputStream fis = null;
		BasicDataSource ds = new BasicDataSource();
		
		try{
			fis = new FileInputStream("db.properties");
			props.load(fis);
			
		}//end try
		catch(IOException e){
			e.printStackTrace();
			return null;
		}//end catch()
		if("mysql".equals(dbType)){
			ds.setDriverClassName(props.getProperty("MYSQL_DB_DRIVER_CLASS"));
			ds.setUrl(props.getProperty("MYSQL_DB_URL"));
			ds.setUsername(props.getProperty("MYSQL_DB_USERNAME"));
			ds.setPassword(props.getProperty("MYSQL_DB_PASSWORD"));
		}
		else{
			return null;
		}
		return ds;
	}
    
}
