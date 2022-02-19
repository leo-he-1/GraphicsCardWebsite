function makeGraphics (itsName, itsCost) {

    var graphicsObj = document.createElement("div");
    

    graphicsObj.name = itsName;          // first use of “condition” creates custom property
    graphicsObj.cost = itsCost;                  // create custom property “price”
    
  //  var graphicsImg = document.createElement("img");
   // graphicsImg.src = theImg;
   // graphicsObj.appendChild(graphicsImg);
    
/*
    carObj.display = function ( ) {           // create custom method “display”
        
        // make the current properties visible on the page
        carObj.innerHTML = "Car condition: " + carObj.condition + "<br/> price: " +
                formatCurrency(carObj.price);
    };
    */
    function display(graphicsObj){
        graphicsObj.innerHTML = "Graphics Card: " + graphicsObj.name + "<br/> Cost: " +
                formatCurrency(graphicsObj.cost);
    }

    graphicsObj.setCondition = function (newCondition) {
        graphicsObj.name = newCondition;
        display(graphicsObj); // show updated property on the page
    };

    graphicsObj.changePrice = function (changeRate) {
        graphicsObj.cost = graphicsObj.cost * (1 + changeRate);
        display(graphicsObj);; // show updated price on the page
    };

    graphicsObj.log = function () {
        console.log("cost of graphics with id " + graphicsObj.id + " is " + graphicsObj.condition + " and price is $" + graphicsObj.cost);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }
    

    display(graphicsObj); // show initial properties on the page 
    return graphicsObj;
}