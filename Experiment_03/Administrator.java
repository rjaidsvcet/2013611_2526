class Administrator extends Person {
    String department;

    void setAdministratorDetails(String n, int a, String d) {
        setPersonDetails(n, a);
        department = d;
    }

    void displayAdministratorDetails() {
        displayPersonDetails();
        System.out.println("Department: " + department);
    }
}
