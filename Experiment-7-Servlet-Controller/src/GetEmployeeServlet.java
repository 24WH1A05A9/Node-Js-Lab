import java.io.*;
import java.util.List;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/GetEmployeeServlet")
public class GetEmployeeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Set response type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // DAO call
        EmployeeDAO dao = new EmployeeDAO();
        List<Employee> list = dao.getEmployees();

        // HTML Response
        out.println("<html><body>");

        out.println("<h2>Employee Details</h2>");
        out.println("<h3>Database: 24WH1A05A9-LakshmiVaishnavi</h3>");

        out.println("<table border='1'>");
        out.println("<tr>");
        out.println("<th>ID</th><th>Name</th><th>Salary</th>");
        out.println("</tr>");

        for (Employee e : list) {
            out.println("<tr>");
            out.println("<td>" + e.getEmp_id() + "</td>");
            out.println("<td>" + e.getEmp_Name() + "</td>");
            out.println("<td>" + e.getEmp_Salary() + "</td>");
            out.println("</tr>");
        }

        out.println("</table>");
        out.println("</body></html>");
    }
}
