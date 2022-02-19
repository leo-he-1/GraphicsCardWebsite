<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = new StringData();
        String email = request.getParameter("emailAddress");
        String pass = request.getParameter("password");
        if ((email == null) || (pass == null)) {
            sd.errorMsg = "Cannot find user: 'emailAddress' and 'password' most be supplied";
        } else {
            DbConn dbc = new DbConn();
            sd.errorMsg = dbc.getErr(); 
            if (sd.errorMsg.length() == 0) { 
                System.out.println("*** Ready to call login");

                sd = DbMods.login(dbc, email, pass);  
            }
            dbc.close(); 
        }
        session.setAttribute("mySession", sd);
        Gson gson = new Gson();
        out.print(gson.toJson(sd).trim());
%>