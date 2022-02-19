function twoGraphicsCards(theImg1,theImg2, theImg3) {

    var twoGraphicsDOM = document.createElement("div");
    
    var graphicsImg1 = document.createElement("img");
    graphicsImg1.src = theImg1;
    twoGraphicsDOM.appendChild(graphicsImg1);
    

    var myGraphicsObj = MakeGraphics("RTX3060", 500);
    myGraphicsObj.classList.add("Graphics");
    twoGraphicsDOM.appendChild(myGraphicsObj);

    var myGraphicsButton = document.createElement("button");
    myGraphicsButton.innerHTML = "Change Cost";
    twoGraphicsDOM.appendChild(myGraphicsButton);

    var myGraphicsInput = document.createElement("input");
    twoGraphicsDOM.appendChild(myGraphicsInput);

    myGraphicsButton.onclick = function () {
        myGraphicsObj.changePrice(myGraphicsInput.value);
    };

    var graphicsImg2 = document.createElement("img");
    graphicsImg2.src = theImg2;
    twoGraphicsDOM.appendChild(graphicsImg2);
    
    var yourGraphicsObj = MakeGraphics("RTX 3070", 1000);
    yourGraphicsObj.classList.add("Graphics");
    twoGraphicsDOM.appendChild(yourGraphicsObj);

    var yourGraphicsButton = document.createElement("button");
    yourGraphicsButton.innerHTML = "Change Name";
    twoGraphicsDOM.appendChild(yourGraphicsButton);

    var yourGraphicsInput = document.createElement("input");
    twoGraphicsDOM.appendChild(yourGraphicsInput);

    yourGraphicsButton.onclick = function () {
        yourGraphicsObj.setCondition(yourGraphicsInput.value);
    };
    twoGraphicsDOM.onmouseover = function(){
        console.log("onmouseover");
        graphicsImg1.src = theImg3;
        graphicsImg2.src = theImg3;
        display(twoGraphicsDOM);
    };
    
    
    //var myGraphicsPicture = document.createElement("img");
   // twoGraphicsDOM.appendChild(myGraphicsPicture);

    return twoGraphicsDOM;
}


