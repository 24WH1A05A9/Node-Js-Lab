package LV24wh1a05a9;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class apply_update {
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/24WH1A05A9",
                    "root",
                    "1234"
            );

            Statement statement = connection.createStatement();

            // UPDATE last employee (highest eid) to a new name
            String updateQuery = "UPDATE Employee SET ename='Lakshmi' ORDER BY eid DESC LIMIT 1";
            int rowsUpdated = statement.executeUpdate(updateQuery);
            System.out.println("Rows updated: " + rowsUpdated);

            // DISPLAY updated table
            ResultSet rs = statement.executeQuery("SELECT * FROM Employee");
            System.out.println("Employee Table after UPDATE:");
            while (rs.next()) {
                System.out.println(rs.getInt("eid") + " " + rs.getString("ename"));
            }

            connection.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

