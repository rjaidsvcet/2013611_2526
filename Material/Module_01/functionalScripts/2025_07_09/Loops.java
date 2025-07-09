class Loops {
    public static void main(String[] args) {
        // for (int i=1; i<=10; i++) {
        //     System.out.println(i);    
        // }

        int i = 1;
        // while (i <= 10) {
        //     System.out.println("The current number is "+i);
        //     // i++;
        //     // i = i + 1;
        //     i += 2;
        // }

        do {
            System.out.println(i);
            i += 2;
        } while (i <= 10);
    }
}