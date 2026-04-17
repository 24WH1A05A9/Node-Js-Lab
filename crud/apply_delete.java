package LV24wh1a05a9;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class apply_delete {
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/24WH1A05A9",
                    "root",
                    "1234"
            );

            Statement statement = connection.createStatement();

            // DELETE last employee using ORDER BY + LIMIT
            String deleteQuery = "DELETE FROM Employee ORDER BY eid DESC LIMIT 1";
            int rowsDeleted = statement.executeUpdate(deleteQuery);
            System.out.println("Rows deleted: " + rowsDeleted);

            // DISPLAY remaining table
            ResultSet rs = statement.executeQuery("SELECT * FROM Employee");
            System.out.println("Employee Table after DELETE:");
            while (rs.next()) {
                System.out.println(rs.getInt("eid") + " " + rs.getString("ename"));
            }

            connection.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
