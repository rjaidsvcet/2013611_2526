class Teacher extends Person {
    String subject;

    void setTeacherDetails(String n, int a, String s) {
        setPersonDetails(n, a);
        subject = s;
    }

    // Display teacher details 
    void displayTeacherDetails() {
    }
}