class Main {
    public static void main(String[] args) {
        Heroes h = new Heroes("Superman", "Clark Kent", true);
        System.out.println(h.getName());
        System.out.println(h.getRealName());
        System.out.println(h.getFlies());
        h.setName("Kal-El");
        System.out.println(h.getName());
    }
}