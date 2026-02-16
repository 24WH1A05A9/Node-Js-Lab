package LV24wh1a05a9;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Sample {
	    public static void main(String[] args) throws Exception {
	        // Step 1: Register driver
	        //DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
	        // Step 2: Create connection
	    	try {
	        Connection connection = DriverManager.getConnection(
	                "jdbc:mysql://localhost:3306/24WH1A05A9",
	                "root",
	                "1234"
	        );
	        // Step 3: Create statement
	        Statement statement = connection.createStatement();
	        // Step 4: Execute query
	        ResultSet rs = statement.executeQuery("select * from Employee");
	        while (rs.next()) {
	            System.out.println(rs.getString("ename"));
	        }
	        // Step 5: Close connection
	        connection.close();
	    }catch(SQLException e) {
	    	e.printStackTrace();
	    }
	    }
}