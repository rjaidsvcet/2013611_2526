class GeneralClass {
    public static void main(String[] args) {
        Student firstStudent = new Student(2, "Steve Rogers", 6.6f);
        // firstStudent.studentName = "Bruce Banner";
        System.out.println(firstStudent.rollNumber);
        System.out.println(firstStudent.studentName);
        System.out.println(firstStudent.marks);        
    }    
}

class Student {
    int rollNumber = 1;
    String studentName = "Peter Parker";
    float marks = 8.87f;

    Student (int rno, String name, float cgpa) {
        this.rollNumber = rno;
        this.studentName = name;
        this.marks = cgpa;
    }
}

