package firstPackage;
import secondPackage.C;

class A {
    public static void main(String[] args) {
        C c = new C ();
        // System.out.println(c.defaultMessage);
        System.out.println(c.publicString);
        System.out.println(c.protectedString);
    }
}