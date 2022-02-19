<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = (StringData) session.getAttribute("mySession");

    if (sd != null) {
        
    } else {
        sd = new StringData();
        sd.errorMsg = "No user logged in";
    }

    Gson gson = new Gson();
    out.print(gson.toJson(sd));
%>