<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.io.PrintWriter" %>

<%
    // Explicit object
    Date currentDate = new Date(); // Explicit Java object

    // Accessing some implicit objects
    String clientIP = request.getRemoteAddr();
    String httpMethod = request.getMethod();
    String serverName = application.getServerInfo();
    String sessionID = session.getId();
    String userAgent = request.getHeader("User-Agent");

    // Writing output using implicit 'out' object
    out.println("<h2>Demonstration of Implicit and Explicit Objects in JSP</h2>");
    out.println("<h3>Explicit Object</h3>");
    out.println("Current Date and Time: " + currentDate + "<br><br>");

    out.println("<h3>Implicit Objects</h3>");
    out.println("Client IP Address: " + clientIP + "<br>");
    out.println("HTTP Method: " + httpMethod + "<br>");
    out.println("Server Name: " + serverName + "<br>");
    out.println("Session ID: " + sessionID + "<br>");
    out.println("User Agent: " + userAgent + "<br>");
%>
