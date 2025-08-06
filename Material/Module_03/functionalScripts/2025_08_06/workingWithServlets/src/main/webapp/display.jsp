<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!-- Directive -->
<%@ page import="java.util.Scanner" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- Declaration -->
	<% int coefficent = 3; %>

	<!-- Scriplet -->
	<%
		out.print(7+5);
	%>
	<br>
	<!-- Expression -->
	This is my coeff : <%= coefficent %>
</body>
</html>