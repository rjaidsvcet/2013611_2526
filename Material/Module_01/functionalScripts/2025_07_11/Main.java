public class Main {
    public static void main (String[] args) {
        // Heroes ironMan = new Heroes (true, true, 750);
        // Heroes hulk = new Heroes (false, true, 10000);
        // Heroes spiderman = new Heroes (false, false, 800);
        // Heroes captainAmerica = new Heroes (false, false, 790);
        // System.out.println (spiderman.special);
        Main created = new Main ();
        created.invites ();
    }   
    
    void invites () {
        System.out.println ("Hello");
        greeting ();
    }

    static void greeting () {
        System.out.print ("From the Greeting Method");
    }

    
}
