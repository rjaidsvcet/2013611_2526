class Calculator {
    // Attributes (for demonstration in parameterized constructor)
    int num1, num2;

    // Default Constructor (Constructor Overloading)
    Calculator() {
        System.out.println("Welcome to Calculator!");
    }

    // Parameterized Constructor (Constructor Overloading)
    Calculator(int a, int b) {
        num1 = a;
        num2 = b;
        int sum = num1 + num2;
        System.out.println("Sum of " + num1 + " and " + num2 + " is: " + sum);
    }

    // Method Overloading: add() with no parameters
    void add() {
        int a = 5, b = 10;
        // Print the summation over here

    }

    // Method Overloading: add() with two integer parameters
    void add(int a, int b) {
        // Add the summation over here as given in the document 

    }

    // Method Overloading: add() with three float parameters
    void add(float a, float b, float c) {
        // Add the summation over here as given in the document
        
    }
}