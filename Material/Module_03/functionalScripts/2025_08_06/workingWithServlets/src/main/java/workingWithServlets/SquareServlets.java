package workingWithServlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/squared")
public class SquareServlets extends HttpServlet {
	public void doGet (HttpServletRequest req, HttpServletResponse res) throws IOException {
//		For Request Dispatcher
//		int k = (int) req.getAttribute("kValue");
//		k *= k;
//		PrintWriter out = res.getWriter();
//		out.print("Result : "+k);
		
//		For Redirecting
//		int k = Integer.parseInt(req.getParameter("k"));
//		k *= k;
//		PrintWriter out = res.getWriter();
//		out.print("Result : "+k);
		
//		Session
//		HttpSession session = req.getSession();
//		int k = (int) session.getAttribute("k");
//		k *= k;
//		PrintWriter out = res.getWriter();
//		out.print("Result : "+k);
		
//		Cookies
		int k = 0;
		Cookie cookies[] = req.getCookies();
		
		for (Cookie c : cookies) {
			if (c.getName().equals("k")) {
				k = Integer.parseInt(c.getValue());
			}
		}
		
		k *= k;
		PrintWriter out = res.getWriter();
		out.print("Result :"+k);
		
	}
}
