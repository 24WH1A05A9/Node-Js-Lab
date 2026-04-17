
public class Employee {

    private int eid;
    private String empName;
    private int empSalary;

    // Constructor
    public Employee(int id, String name, int salary) {
        this.eid = id;
        this.empName = name;
        this.empSalary = salary;
    }

    // Getter for ID
    public int getEmp_id() {
        return eid;
    }

    // Getter for Name
    public String getEmp_Name() {
        return empName;
    }

    // Getter for Salary
    public int getEmp_Salary() {
        return empSalary;
    }
}
