function graphicsUpdate() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <div id="insertArea">

            <table>
                <tr>
                    <td>Card Id</td>
                    <td><input type="text"  id="cardId" /></td>
                    <td><button onclick="getOtherData()">Get Other Data</button></td> 
                    <td id="cardIdError" class="error"></td> 
                </tr>
            </table>

            <table>
                <tr>
                    <td>Card Name</td>
                    <td><input type="text"  id="cardName" /></td>
                    <td id="cardNameError" class="error"></td> 
                </tr>
                <tr>
                    <td>Img</td>
                    <td><input type="text"  id="img" /></td>
                    <td id="imgError" class="error"></td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td><input type="text" id="price" /></td>
                    <td id="priceError" class="error"></td>
                </tr>
                <tr>
                    <td>Brand</td>
                    <td><input type="text" id="brand" /></td>
                    <td id="brandError" class="error"></td>
                </tr>
                 <tr>
                    <td>Cuda Cores</td>
                    <td><input type="text" id="cudaCores" /></td>
                    <td id="cudaCoresError" class="error"></td>
                </tr>
                <tr>
                    <td>Web User Id</td>
                    <td><input type="text" id="webUserId" /></td>
                    <td id="webUserIdError" class="error"></td> 
                </tr>

                <tr>
                    <!-- see js/insertUser.js to see the insertUser function (make sure index.html references the js file) -->
                    <td><button onclick="updateGraphicsSave()">Save</button></td>
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
function getOtherData() {
    var cardId = document.getElementById("cardId").value;
    var url = "webAPIs/getOtherByIdAPI.jsp?cardId=" + encodeURI(cardId);
    ajax(url, gotUserData, document.getElementById("cardIdError"));

    function gotUserData(obj) {

        document.getElementById("cardName").value = obj.cardName;
        document.getElementById("img").value = obj.img;
        document.getElementById("price").value = obj.price;
        document.getElementById("brand").value = obj.brand;
        document.getElementById("cudaCores").value = obj.cudaCores;
        document.getElementById("webUserId").value = obj.webUserId;
        document.getElementById("recordError").value = obj.errorMsg;
    }
}


function updateGraphicsSave() {
    console.log("insertSave was called");

    // create a user object from the values that the user has typed into the page.
    var userInputObj = {
        "cardId": document.getElementById("cardId").value,
        "cardName": document.getElementById("cardName").value,
        "img": document.getElementById("img").value,
        "price": document.getElementById("price").value,
        "brand": document.getElementById("brand").value,
        "cudaCores": document.getElementById("cudaCores").value,
        "webUserId": document.getElementById("webUserId").value,
        "errorMsg": ""
    };
    console.log(userInputObj);

    // build the url for the ajax call. Remember to encodeURI the user input object or else 
    // you may get a security error from the server. JSON.stringify converts the javaScript
    // object into JSON format (the reverse operation of what gson does on the server side).
    var myData = encodeURI(JSON.stringify(userInputObj));
    var url = "webAPIs/updateOtherAPI.jsp?jsonData=" + myData;
    ajax(url, ajaxSuccess, document.getElementById("recordError"));

    function ajaxSuccess(jsonObj) {
        // Running this function does not mean insert success. It just means that the Web API
        // call (to insert the record) was successful.
        // 
        // the server prints out a JSON string of an object that holds field level error 
        // messages. The error message object (conveniently) has its fiels named exactly 
        // the same as the input data was named. 
        console.log("here is JSON object (holds error messages.");
        console.log(jsonObj);

        document.getElementById("cardNameError").innerHTML = jsonObj.cardName;
        document.getElementById("imgError").innerHTML = jsonObj.img;
        document.getElementById("priceError").innerHTML = jsonObj.price;
        document.getElementById("brandError").innerHTML = jsonObj.brand;
        document.getElementById("cudaCoresError").innerHTML = jsonObj.brand;
        document.getElementById("webUserIdError").innerHTML = jsonObj.webUserId;

        if (jsonObj.errorMsg.length === 0) { // success
            jsonObj.errorMsg = "Record successfully updated !!!";
        }
        document.getElementById("recordError").innerHTML = jsonObj.errorMsg;
    }
}