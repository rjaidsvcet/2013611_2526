class Functions {
    public static void main (String[] args) {
        // helloWorld ("Tony Stark");
        int output = summation (10, 20);
        int modifiedNumber = output + 10;
        System.out.println ("The final answer is "+modifiedNumber);
    }

    static int summation (int firstNumber, int secondNumber) {
        int result = firstNumber + secondNumber;
        return result;
    }

    static void helloWorld (String name) {
        System.out.println ("Hello World with "+name);
    }
}