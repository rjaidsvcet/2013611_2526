<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<head><title>Login Page</title></head>
<body>
    <h2>Login</h2>
    <form action="LoginServlet" method="post">
        Username: <input type="text" name="username" required /><br/><br/>
        Password: <input type="password" name="password" required /><br/><br/>
        <input type="submit" value="Login" />
    </form>
</body>
</html>
