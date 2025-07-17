public class Heroes {
    private String name;
    private String realName;
    private boolean flies;

    Heroes (String name, String rn, boolean fly) {
        this.setName(name);
        // this.name = name;
        this.realName = rn;
        this.flies = fly;
    }

    public String getName () {
        return name;
    }

    public String getRealName () {
        return realName;
    }

    public boolean getFlies () {
        return flies;
    }

    public void setName (String name) {
        this.name = name;
    }
}


