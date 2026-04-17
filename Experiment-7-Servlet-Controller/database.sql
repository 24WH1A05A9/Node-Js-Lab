USE 24WH1A05A9;

CREATE TABLE Employee (
    eid INT PRIMARY KEY,
    empName VARCHAR(50),
    empSalary INT
);

INSERT INTO Employee VALUES (1, 'Vaishnavi', 50000);
INSERT INTO Employee VALUES (2, 'Esha', 45000);
INSERT INTO Employee VALUES (3, 'Akshaya', 55000);
INSERT INTO Employee VALUES (4, 'Shreya', 48000);

select * from Employee;

+-----+-----------+--------+
| eid | ename     | salary |
+-----+-----------+--------+
|   1 | Vaishnavi |  50000 |
|   2 | Esha      |  45000 |
|   3 | Akshaya   |  55000 |
|   4 | Shreya    |  48000 |
+-----+-----------+--------+
4 rows in set (0.00 sec)
