class Overloads {
    public static void main(String[] args) {
        realHeroes();
        realHeroes("Spiderman");
        realHeroes("Bruce", "Banner");   
    }

    static void realHeroes () {
        System.out.println("This is Peter Parker");
    }

    static void realHeroes (String heroName) {
        System.out.println("The hero is "+heroName);
        // System.out.println("This is Peter");
    }

    static void realHeroes (String firstname, String lastname) {
        System.out.println(firstname+" "+lastname);
    }
}