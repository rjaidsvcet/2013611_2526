import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.Statement;

public class App {
    public static void main(String[] args) throws Exception {
        String sql = "SELECT fn, ln FROM person WHERE country='India'";

        String url = "jdbc:postgresql://localhost:5432/trial";
        String username = "postgres";
        String password = "root";

        Connection con = DriverManager.getConnection(url, username, password);
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery(sql);
        // rs.next();
        // String name = rs.getString(1);
        // System.out.println(name);

        while (rs.next()) {
            String firstName = rs.getString(1);
            String lastName = rs.getString(2);
            System.out.print(rs.getString("fn")+" ");
            System.out.println(rs.getString("ln"));
        }

        con.close();

        // try {
        //     String url = "jdbc:postgresql://localhost:5432/trial";
        //     String username = "postgres";
        //     String password = "root";

        //     Connection con = DriverManager.getConnection(url, username, password);
            
        //     String q = "INSERT INTO person (fn, ln, gender, dob, country) VALUES (?, ?, ?, ?::date, ?)";

        //     PreparedStatement pstm = con.prepareStatement(q);
        //     pstm.setString(1, "Amrit");
        //     pstm.setString(2, "Singh");
        //     pstm.setString(3, "Male");
        //     pstm.setString(4, "2000-06-13");
        //     pstm.setString(5, "India");
        //     pstm.executeUpdate();
        //     con.close();
        // } catch (Exception e) {
        //     e.printStackTrace();
        // }

    }
}
