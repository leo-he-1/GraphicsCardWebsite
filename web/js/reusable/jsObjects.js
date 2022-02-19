function jsObjects () {
    var ele = document.createElement("div");
    
    var msgDiv = document.createElement("div");
    ele.appendChild(msgDiv);
    
    var content = `
    <style>
            body {
                font-family:sans-serif;
            }
            * {
                box-sizing: border-box;
            }
            .container {
                display: flex;
                flex-direction: row;
            }
            .container .graphicsStyle {
                background-color:#DDDDDD; /* light grey */
                padding:0.5rem;
                margin:0.5rem;
                border-radius: 8px;
                box-shadow: 3px 3px 3px #888888; /* darker grey */
                width: 48%; 
                margin: 1%;
                text-align: center;
                margin:auto;
            }
            .container .graphicsStyle img {
                width: 80%;
            }

            .container .graphicsStyle h3 {
                margin-bottom: 0rem;
            }
        </style>
      <h4>Home</h4>
      <p>
         Here are two example graphics cards. 
      </p>
       <td><button onclick="getGraphicsData()">Get Graphics Data</button></td> 
      <div class='container'>
            <div id="graphics" class="graphicsStyle"></div>
          
      </div>
 
    `;
    
    function getGraphicsData(){
    var graphicsObj = twoGraphicsCards("pics/RTX3060.jpg","pics/RTX3070.jpg","pics/specs.png");
    msgDiv.appendChild(graphicsObj);
    display(graphicsObj);
    }
    
    ele.innerHTML = content;
    return ele; 
}

