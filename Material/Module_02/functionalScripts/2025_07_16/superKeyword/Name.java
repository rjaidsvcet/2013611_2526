class Name {
    String firstName;
    String middleName;
    String lastName;


    // Name () {

    // }

    Name (String fn, String mn, String ln) {
        this.firstName = fn;
        this.middleName = mn;
        this.lastName = ln;
    }

    public String toString () {
        return this.firstName+"\n"+this.lastName;
    }

    // public String toString () {
    //     return firstName;
    // }
}