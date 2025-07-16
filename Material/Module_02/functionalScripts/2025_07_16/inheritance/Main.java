public class Main {
    public static void main(String[] args) {
        Kryptonian k = new Kryptonian();
        k.flies();
        k.realName();
        
        Earthling clark = new Earthling();
        clark.name();
        clark.name("Clark");
        clark.flies();
        clark.realName();
    }
}
