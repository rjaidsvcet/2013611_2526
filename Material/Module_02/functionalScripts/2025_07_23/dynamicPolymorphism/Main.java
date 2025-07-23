import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Declare the parent
        Superhuman superhuman;

        System.out.println("Select your superhuman");
        System.out.println("1-Kryptonian, 2-Viltrumite");
        int choice = sc.nextInt();

        if (choice == 1) {
            superhuman = new Kryptonian();
            superhuman.flies();
        } 
        else if (choice == 2) {
            superhuman = new Viltrumite();
            superhuman.flies();
        }
        else {
            superhuman = new Superhuman();
            superhuman.flies ();
        }

        sc.close();
    }
}
