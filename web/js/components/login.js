function login() {
 
    var findDiv = document.createElement("div");
    findDiv.classList.add("find");

    var emailAddress = document.createElement('span');
    emailAddress.innerHTML = "Email Address ";
    findDiv.appendChild(emailAddress);
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email"); // 
    findDiv.appendChild(emailInput);
    
    var password = document.createElement('span');
    password.innerHTML = " Password ";
    findDiv.appendChild(password);
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "name"); // 
    findDiv.appendChild(passwordInput);

    var loginButton = document.createElement("button");
    loginButton.innerHTML = "Submit";
    findDiv.appendChild(loginButton);

    var msgDiv = document.createElement("div");
    findDiv.appendChild(msgDiv);

    loginButton.onclick = function () {

        var url = "webAPIs/loginAPI.jsp?emailAddress=" + encodeURI(emailInput.value)+"&password="+encodeURI(passwordInput.value);
        
        
        console.log("onclick function will make AJAX call with url: " + url);
        ajax(url, processLogon, msgDiv);

        function processLogon(obj) {
            var msg = "";
            console.log("Successfully called the find API. Next line shows the returned object.");
            console.log(obj);
            if (obj.errorMsg.length > 0) {
                msg += "<strong>Error: " + obj.errorMsg + "</strong>";
            } else {
                msg += "<strong>Welcome Web User " + obj.webUserId + "</strong>";
                msg += "<br/> Birthday: " + obj.birthday;
                msg += "<br/> MembershipFee: " + obj.membershipFee;
                msg += "<br/> User Role: " + obj.userRoleId + " " + obj.userRoleType;
                msg += "<p> <img src ='" + obj.image + "'></p>";
            }
            msgDiv.innerHTML = msg;
        }
    }; 

    return findDiv;
}
;
