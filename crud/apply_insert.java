package LV24wh1a05a9;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class apply_insert {
    public static void main(String[] args) {

        try {
            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/24WH1A05A9",
                    "root",
                    "1234"
            );

            Statement statement = connection.createStatement();

            // INSERT two new employees
            String insert1 = "INSERT INTO Employee (eid, ename) VALUES (3, 'Shreya')";
            String insert2 = "INSERT INTO Employee (eid, ename) VALUES (4, 'Mehar')";

            int rows1 = statement.executeUpdate(insert1);
            int rows2 = statement.executeUpdate(insert2);

            System.out.println("Rows inserted: " + (rows1 + rows2));

            // Display table after insertion
            ResultSet rs = statement.executeQuery("SELECT * FROM Employee");
            System.out.println("Employee Table after INSERT:");
            while (rs.next()) {
                System.out.println(rs.getInt("eid") + " " + rs.getString("ename"));
            }

            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
