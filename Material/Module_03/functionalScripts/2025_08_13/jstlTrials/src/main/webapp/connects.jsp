<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<sql:setDataSource var="db" driver="org.postgresql.Driver" url="jdbc:postgresql://localhost:5432/trial" user="postgres" password="root"/>
	<sql:query var="rs" dataSource="${db}">SELECT fn, ln, gender FROM person WHERE country='India'</sql:query>
	
	<c:forEach items="${rs.rows}" var="names">
		<ul>
			<li>
				<c:out value="${names.fn}"></c:out> <c:out value="${names.ln}"></c:out>
			</li>
		</ul>
	</c:forEach>
		
</body>
</html>