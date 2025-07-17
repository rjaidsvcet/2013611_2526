package secondPackage;

public class Csub extends C {
    public static void main(String[] args) {
        C c = new C();
        System.out.println(c.defaultMessage);
        System.err.println(c.publicString);
        // System.out.println(c.privateString);
        System.out.println(c.protectedString);
    }
}
