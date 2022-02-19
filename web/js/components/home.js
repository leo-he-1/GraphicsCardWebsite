function home () {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
    <h4>Home</h4>
    <p>
       This website contains information on the latest graphics cards. This includes release dates, performance metrics, and dimensions.
       These stats will be provided on individual graphics cards.
    </p>
    <p>
        RTX 2080 Ti 
    </p>
        <p style="text-align:center;">
        <img src="pics/RTX_2080Ti.png" style="width:50%; border-radius:10px;">
    </p>
    `;
    
  
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}