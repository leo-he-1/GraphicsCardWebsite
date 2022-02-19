function insertUser() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <div class="insertUserArea">

                <table>
                    <tr>
                        <td>Email Address</td>
                        <td><input type="text"  id="userEmail" /></td>
                        <td id="userEmailError" class="error"></td> 
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password"  id="userPassword" /></td>
                        <td id="userPasswordError" class="error"></td>
                    </tr>
                    <tr>
                        <td>Retype Your Password</td>
                        <td><input type="password" id="userPassword2" /></td>
                        <td id="userPassword2Error" class="error"></td>
                    </tr>
                    <tr>
                        <td>Image URL</td>
                        <td><input type="text" id="image" /></td>
                        <td id="imageError" class="error"></td>
                    </tr>
                    <tr>
                        <td>Birthday</td>
                        <td><input type="text" id="birthday" /></td>
                        <td id="birthdayError" class="error"></td> 
                    </tr>
                    <tr>
                        <td>Membership Fee</td>
                        <td><input type="text" id="membershipFee" /></td>
                        <td id="membershipFeeError" class="error"></td>
                    </tr>
                    <tr>
                        <td>User Role</td>
                        <td><input type="text" id="userRoleId" /></td>
                        <td id="userRoleIdError" class="error"></td>
                    </tr>
                    <tr>
                        <td><button onclick="insertUserSave()">Save</button></td>
                        <td id="recordError" class="error"></td>
                        <td></td>
                    </tr>
                </table>
            </div>
      
      
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}
function insertUserSave() {
    console.log("insertUserSave was called");

    // create a user object from the values that the user has typed into the page.
    var userInputObj = {
        "webUserId": "",
        "userEmail": document.getElementById("userEmail").value,
        "userPassword": document.getElementById("userPassword").value,
        "userPassword2": document.getElementById("userPassword2").value,
        "image": document.getElementById("image").value,
        "birthday": document.getElementById("birthday").value,
        "membershipFee": document.getElementById("membershipFee").value,
        "userRoleId": document.getElementById("userRoleId").value,
        "userRoleType": "",
        "errorMsg": ""
    };
    console.log(userInputObj);

    // build the url for the ajax call. Remember to encodeURI the user input object or else 
    // you may get a security error from the server. JSON.stringify converts the javaScript
    // object into JSON format (the reverse operation of what gson does on the server side).
    var myData = encodeURI(JSON.stringify(userInputObj));
    var url = "webAPIs/insertUserAPI.jsp?jsonData=" + myData;
    ajax(url, insertUserAPISuccess, document.getElementById("recordError"));

    function insertUserAPISuccess(jsObj) {
        // Running this function does not mean insert success. It just means that the Web API
        // call (to insert the record) was successful.
        // 
        // the server prints out a JSON string of an object that holds field level error 
        // messages. The error message object (conveniently) has its fiels named exactly 
        // the same as the input data was named. 
        console.log("here is JSON object (holds error messages.");
        console.log(jsObj);

        document.getElementById("userEmailError").innerHTML = jsObj.userEmail;
        document.getElementById("userPasswordError").innerHTML = jsObj.userPassword;
        document.getElementById("userPassword2Error").innerHTML = jsObj.userPassword2;
        document.getElementById("imageError").innerHTML = jsObj.image;
        document.getElementById("birthdayError").innerHTML = jsObj.birthday;
        document.getElementById("membershipFeeError").innerHTML = jsObj.membershipFee;
        document.getElementById("userRoleIdError").innerHTML = jsObj.userRoleId;

        if (jsObj.errorMsg.length === 0) { // success
            jsObj.errorMsg = "Record successfully inserted !!!";
        }
        document.getElementById("recordError").innerHTML = jsObj.errorMsg;
    }
}