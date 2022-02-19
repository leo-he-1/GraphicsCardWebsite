// This version of MakeTable expects objList to hold an array of objects 
// in which all the properties are already "td" tags which may contain images, 
// alignment, etc. 

function MakeTableBetter (title, objList) {

    // Create a container to hold the title (heading) and the HTML table
    var container = document.createElement("div");

    // Add a heading (for the title) and add that to the container
    var heading = document.createElement("h2");
    heading.innerHTML = title;
    container.appendChild(heading);

    // Create a new HTML table tag (DOM object) and add that to the container.
    var newTable = document.createElement("table");
    container.appendChild(newTable);

    // To the HTML table, add a tr element to hold the headings of our table.
    var headerRow = document.createElement("tr");
    newTable.appendChild(headerRow);

    // To the table heading row, add one th (table heading cell) per property 
    // of the objects in the object list. 

    // iterate through the properties in the first object in the object list.
    var obj = objList[0];
    for (var propName in obj) {
        var headingCell = document.createElement("th");
        headingCell.innerHTML = propName;
        headerRow.appendChild(headingCell);
    }

    // Add a tbody tag to the table (could be skipped but will be useful in later examples).
    var tableBody = document.createElement("tbody");
    newTable.appendChild(tableBody);

    // To the tbody, add one row (to HTML table) per object in the object list.
    // To each row, add a td element (Table Data, a cell) that holds the object's 
    // property values. 
    for (var i in objList) {
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);

        // create one table data <td> content matching the property name
        var obj = objList[i];
        for (var prop in obj) {

            // **** THE ONLY CHANGE IS HERE ****
            // obj[prop] should already hold a "td" tag
            tableRow.appendChild(obj[prop]);
            // **** END OF THE CHANGE       ****
        }
    }

    return container;

}  // MakeTableBetter