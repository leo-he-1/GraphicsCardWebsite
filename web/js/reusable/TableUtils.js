var TableUtils = {};

TableUtils.makeText = function (text) {
    var tableData = document.createElement('td');
    if (!text) {
        text = "";
    }
    tableData.innerHTML = text;
    tableData.style.textAlign = "left"; // text elements usually align left
    return tableData;
};

// num can be a numeric value in a string or a numeric value
// If what's in the string is not numeric, you'll see "Not Numeric" before the value.
TableUtils.makeNumber = function (num, isFormatCurrency) {
    
    var tableData = document.createElement('td');
    if (!num) {
        num = "";
    } else {
        tmp = num + ""; // tmp is num converted to string
        
        // Remove any previous formatting that may be there... 
        tmp = tmp.replace(" ", "");        
        tmp = tmp.replace(",", "");
        tmp = tmp.replace("$", "");
        
        // see if the value now in the string (with formatting removed) is numeric.
        if (isNaN(tmp)) { 
            num = "Not Numeric " + num; // preserve original value in error msg.
        } else {
            if (isFormatCurrency) {
                var numericValue = Number(tmp);
                num = numericValue.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
            }
        }
    }
    tableData.innerHTML = num;
    tableData.style.textAlign = "right"; // text elements usually align left
    return tableData;
};

TableUtils.makeDate = function (dateString) {
    var tableData = document.createElement('td');
    if (!dateString) {
        dateString = "";
    }
    tableData.innerHTML = dateString;
    tableData.style.textAlign = "center"; // center the dates
    return tableData;
};

TableUtils.makeImage = function (imageFileName, width) {

    var tableData = document.createElement('td');
    var img = document.createElement("img");
    img.src = imageFileName;
    img.style.width = width;

    tableData.appendChild(img);
    tableData.style.textAlign = "center"; // center the images 
    return tableData;
};