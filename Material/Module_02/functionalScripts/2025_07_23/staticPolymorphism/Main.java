public class Main {
    public static void main(String[] args) {
        Kryptonian k = new Kryptonian();
        Viltrumite v = new Viltrumite();

        Superhuman[] supers = {k, v};

        for (Superhuman s : supers) {
            s.flies ();
        }

        // k.flies();
        // v.flies();
    }
}
