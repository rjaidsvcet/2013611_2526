public class Main {
    public static void main(String[] args) {
        // Using default constructor
        Calculator calc1 = new Calculator();

        // Using parameterized constructor
        Calculator calc2 = new Calculator(15, 25);

        // Demonstrating method overloading
        calc1.add();                    // No parameters
        calc1.add(20, 30);              // Two integers
        calc1.add(12.5f, 15.5f, 10.0f); // Three floats

    }
}
