public class Superman implements Flying, Laser {
    @Override
    public void flies () {
        System.out.println("Flies");
    }

    @Override
    public void shoots () {
        System.out.println("Laser shooting");
    }

    @Override
    public String unguided (boolean direction) {
        return "Shoots the laser in direction "+direction;
    }
}