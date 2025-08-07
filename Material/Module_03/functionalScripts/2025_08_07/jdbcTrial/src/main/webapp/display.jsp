<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	Hello World <br>
	
	<%
		String url="jdbc:postgresql://localhost:5432/trial";
		String username = "postgres";
		String password = "root";
		String sql = "SELECT fn, ln, gender FROM person";
		Class.forName ("org.postgresql.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery(sql);
		while (rs.next ()) {
		%>
			<%= rs.getString(1) %>&nbsp<%= rs.getString(2) %>&nbsp<%= rs.getString(3) %><br>
		<%	
		}
	%>
	
	
</body>
</html>