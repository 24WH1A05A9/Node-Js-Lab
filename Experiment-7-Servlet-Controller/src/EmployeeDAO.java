
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EmployeeDAO {

    // Method to establish DB connection
    static Connection getDBConnection() {
        Connection connection = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/24WH1A05A9?serverTimezone=UTC",
                "root",
                "mysql!7"
            );

        } catch (Exception e) {
            e.printStackTrace();
        }

        return connection;
    }

    // Method to fetch employees
    List<Employee> getEmployees() {

        List<Employee> employeeList = new ArrayList<>();
        Connection connection = EmployeeDAO.getDBConnection();

        try {
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("SELECT * FROM employee");

            while (rs.next()) {
                int id = rs.getInt("eid");
                String name = rs.getString("ename");
                int salary = rs.getInt("salary");

                Employee employee = new Employee(id, name, salary);
                employeeList.add(employee);
            }

            rs.close();
            statement.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return employeeList;
    }
}
