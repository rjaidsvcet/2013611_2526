import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the first number");
        int firstNumber = sc.nextInt();
        System.out.println("Enter the second number");
        int secondNumber = sc.nextInt();

        try {
            int division = firstNumber / secondNumber;
            System.out.println("Division : "+division);
        } catch (ArithmeticException e) {
            System.out.println("Zero division is not allowed");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            sc.close();
        }

        // sc.close();


    }
}