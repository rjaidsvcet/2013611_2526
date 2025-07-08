import java.util.Scanner;

public class Introduction {
    public static void main (String[] args) {
        // System.out.println("Hello World");
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter the firstnumber");
        int firstNumber = sc.nextInt();
        System.out.println("Please enter the second number");
        int secondNumber = sc.nextInt();
        int summation = firstNumber + secondNumber;
        System.out.println("Summation : "+summation);
        System.out.println("Hello");
        sc.close();       
    }
}