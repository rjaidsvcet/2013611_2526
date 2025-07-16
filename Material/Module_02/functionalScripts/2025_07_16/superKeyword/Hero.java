class Hero extends Name {
    String heroName;

    // Hero (String firstname, String middlename, String lastname, String heroName) {
    //     this.firstName = firstname;
    //     this.middleName = middlename;
    //     this.lastName = lastname;
    //     this.heroName = heroName;
    // }

    Hero (String fn, String mn, String ln, String heroName) {
        super (fn, mn, ln);
        this.heroName = heroName;
    }

    // public String toString () {
    //     return this.firstName + "\n" + this.heroName;
    // }

    public String toString () {
        return super.toString() + "\n" + this.heroName;
    }
}
