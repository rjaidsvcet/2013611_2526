package workingWithServlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/add")
public class AddServlets extends HttpServlet {
	public void doPost (HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		int i = Integer.parseInt(req.getParameter("num1"));
		int j = Integer.parseInt(req.getParameter("num2"));
		int k = i + j;
		
//		Normal Printing
//		System.out.println("Result : "+k);
//		PrintWriter out = res.getWriter();
//		out.println ("Result:"+k);
		
//		Request Dispatcher
//		req.setAttribute("kValue", k);
//		RequestDispatcher rd = req.getRequestDispatcher("squared");
//		rd.forward(req, res);
		
//		Redirect
//		res.sendRedirect("squared?k="+k);
		
//		Session
//		HttpSession session = req.getSession();
//		session.setAttribute("k", k);
//		res.sendRedirect("squared");
		
//		Cookies
		Cookie cookie = new Cookie("k", k+"");
		res.addCookie(cookie);
		
		res.sendRedirect("squared");
		
		
	}
}
