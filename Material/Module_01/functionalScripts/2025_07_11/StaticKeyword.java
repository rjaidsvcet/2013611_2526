public class StaticKeyword {
    public static void main (String[] args) {
        genericMethod ("Random");
    }

    static void genericMethod () {
        System.out.println ("This is a generic method");
    }

    static void genericMethod (String name) {
        System.out.println ("The name is "+name);
    }
}
