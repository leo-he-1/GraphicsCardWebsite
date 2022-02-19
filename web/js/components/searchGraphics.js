function searchGraphics() {
 
    var findDiv = document.createElement("div");
    findDiv.classList.add("find");

    var membershipFee = document.createElement('span');
    membershipFee.innerHTML = "MemberShip Fee > ";
    findDiv.appendChild(membershipFee);
    var membershipFeeInput = document.createElement("input");
    membershipFeeInput.setAttribute("type", "number"); // 
    findDiv.appendChild(membershipFeeInput);
    
    var birthday = document.createElement('span');
    birthday.innerHTML = " and Birthday < ";
    findDiv.appendChild(birthday);
    var birthdayInput = document.createElement("input");
    birthdayInput.setAttribute("type", "name"); // 
    findDiv.appendChild(birthdayInput);

    var findButton = document.createElement("button");
    findButton.innerHTML = "Find";
    findDiv.appendChild(findButton);

    var msgDiv = document.createElement("div");
    findDiv.appendChild(msgDiv);

    findButton.onclick = function () {

        var url = "webAPIs/getuserAlt.jsp?minMembershipFee=" + encodeURI(membershipFeeInput.value)+"&maxBirthday="+encodeURI(birthdayInput.value);
        
        
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
