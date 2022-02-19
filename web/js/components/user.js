function user() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <a target="_blank" href='webAPIs/listUsersAPI.jsp'>List User API</a>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}