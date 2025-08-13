package com.jstlTrials;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/demo")
public class DemoServlet extends HttpServlet {
	protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = "Nolan Grayson";
		request.setAttribute("label", name);
		
		RequestDispatcher rd = request.getRequestDispatcher("display.jsp");
		rd.forward (request, response);
	}
}
