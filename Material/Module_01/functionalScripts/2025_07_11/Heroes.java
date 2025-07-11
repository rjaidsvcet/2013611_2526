public class Heroes {
    boolean fly;
    boolean bulletImmunity;
    int strength;
    static long special;

    Heroes () {

    }

    Heroes (boolean flies, boolean bulletDeflection, int strong) {
        this.fly = flies;
        this.bulletImmunity = bulletDeflection;
        this.strength = strong;
        Heroes.special += 1;

    }
}
