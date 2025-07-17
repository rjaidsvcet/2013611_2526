public class Superman extends Kryptonian {
    @Override
    void flies () {
        System.out.println("Flies in the sky");
    }

    @Override
    String shootsLaser (boolean laser) {
        return "Shoots laser is "+laser;
    }
}
