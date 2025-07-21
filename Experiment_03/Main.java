public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setStudentDetails("Rahul", 20, "B.Tech", 123);
        System.out.println("Student Details:");
        s.displayStudentDetails();
        System.out.println();

        GraduateStudent gs = new GraduateStudent();
        gs.setGraduateStudentDetails("Anjali", 22, "M.Tech", 456, 2023);
        System.out.println("Graduate Student Details:");
        gs.displayGraduateStudentDetails();
        System.out.println();

        Teacher t = new Teacher();
        t.setTeacherDetails("Meera", 35, "Mathematics");
        System.out.println("Teacher Details:");
        t.displayTeacherDetails();
        System.out.println();

        Administrator a = new Administrator();
        a.setAdministratorDetails("Raj", 40, "HR");
        System.out.println("Administrator Details:");
        a.displayAdministratorDetails();
    }
}