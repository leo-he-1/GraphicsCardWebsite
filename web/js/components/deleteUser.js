function deleteUser() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <div>
            <h3>Delete Tester</h3>
            Enter id of web_user: <input type="text" id="inputId"/>
            <button onclick="callUserDeleteAPI()">Delete</button>
            <p></p>
            <div id="message"></div>
        </div>
      
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}
function callUserDeleteAPI() {
                    
                    var messageDOM = document.getElementById("message");

                    messageDOM.innerHTML = ""; // blank out any old message

                    var idToDelete = document.getElementById("inputId").value;

                    // parameter properties needed for ajax call: url, successFn, and errorId
                    ajax("webAPIs/deleteUserAPI.jsp?deleteId=" + idToDelete, APISuccess, messageDOM);

                    function APISuccess(obj) { // function is local to callDeleteAPI
                        console.log("successful ajax call");

                        // var obj = JSON.parse(httpReq.responseText);  // already done by ajax2...

                        // Empty string means sucessful delete. The HTML coder gets to decide how to 
                        // deliver the good news.
                        if (obj.errorMsg.length === 0) {
                            var msg = "Record " + idToDelete + " successfully deleted. ";
                            console.log(msg);
                            messageDOM.innerHTML = msg;
                        } else {
                            console.log("Delete Web API got this error: "+ obj.errorMsg);
                            messageDOM.innerHTML = "Web API successfully called, but " +
                                    "got this error from the Web API: <br/><br/>" + obj.errorMsg;
                        }
                    }
                }