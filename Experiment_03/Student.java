class Student extends Person {
    String course;
    int rollNumber;

    void setStudentDetails(String n, int a, String c, int r) {
        setPersonDetails(n, a);
        course = c;
        rollNumber = r;
    }

    void displayStudentDetails() {
        displayPersonDetails();
        System.out.println("Course: " + course);
        System.out.println("Roll Number: " + rollNumber);
    }
}