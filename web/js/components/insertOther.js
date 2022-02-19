function insertOther() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <div id="insertOtherArea">

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
                    <td><button onclick="insertOtherSave()">Save</button></td>
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

function insertOtherSave() {
    console.log("insertOtherSave was called");

    // create a user object from the values that the user has typed into the page.
    var userInputObj = {
            "cardId": "",
            "cardName": document.getElementById("cardName").value,
            "img": document.getElementById("img").value,
            "price": document.getElementById("price").value,
            "brand": document.getElementById("brand").value,
            "cudaCores": document.getElementById("cudaCores").value,
            "webUserId": document.getElementById("webUserId").value,
            "errorMsg": ""
    };
    console.log(userInputObj);console.log(userInputObj);

  
    var myData = encodeURI(JSON.stringify(userInputObj));
    var url = "webAPIs/insertOtherAPI.jsp?jsonData=" + myData;
    ajax(url, insertOtherAPISuccess, document.getElementById("recordError"));

    function insertOtherAPISuccess(jsObj) {
        console.log("here is JSON object (holds error messages.");
        console.log(jsObj);

        document.getElementById("cardNameError").innerHTML = jsObj.cardName;
        document.getElementById("imgError").innerHTML = jsObj.img;
        document.getElementById("priceError").innerHTML = jsObj.price;
        document.getElementById("brandError").innerHTML = jsObj.brand;
        document.getElementById("cudaCoresError").innerHTML = jsObj.brand;
        document.getElementById("webUserIdError").innerHTML = jsObj.webUserId;

        if (jsObj.errorMsg.length === 0) { // success
            jsObj.errorMsg = "Record successfully inserted !!!";
        }
        document.getElementById("recordError").innerHTML = jsObj.errorMsg;
    }
}