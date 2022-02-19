function blog() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>My Blog</h4>
      <p>
        Web Design Experience
        
        Proposed Database Design - Table will be filled with graphics cards. The field names will be name, price, release date, brand, and cuda cores.<br> 
        
        HW 1- A little bit of previous web development experience. Some parts were harder. Some of the css was a bit confusing in hw 1<br>
        
        HW 2 Blog: I found it difficult to style to drop down menus in the nav bar. Routing was <br>
        also a little confusing at first. I found it valuable to be able to route as it makes navigating my <br>
        website a lot easier.<br>
    
        HW 3 Blog: I thought creating objects was hard. This made creating the make function diffiuclt for me.MakeTableBetter<br>
        I thought learning how to display more than just text messages in compnents was a valuable lesson.
 
        
        Database: 
        I have worked with databases before. 
        I found creating tables a bit confusing at first since I have never used sql workbench, but I 
        found querying pretty easy as I have done this kind of stuff before.<br>
        Click <a target="_blank" href='Database_Homework.pdf'>here</a> to see my database document. <br>
        
    
        HW 5 Blog:
        I found a bit confusing adding routing to the stuff I learned in lab 5. I found it easy to add new
        components to route, and I learned how ajax works and how to get json data with it.<br>
        
        HW 6 Blog: 
        I was still unable to implement a clicksortable table. I was able to read the data from my database.
        I learned more about how the formating works and how the table view files interacted with the other files. <br>
       
        HW 7 Blog: I thought this assignment was not too bad. The hardest part for me was displaying the information
        correctly. This assignment gave me valuable practice with sql commands and getting to know what the dbUtils package does.
        
        HW 8 Blog: Making the components to display each was hard. I found that completing the insert other 
        part of this assignment helpped me debug a lot with the console in the web browser.
    
        HW 9 Blog: 
        It was hard to use a reusable component, but I think that was also the most important part for me
        I learned about how to use a reusable component beyond just displaying a message. <br>
    
        HW 10 Blog: 
        This homework was harder when it came to using reasuable js files. The delete code was not too hard to implement
        into my dbconn. I gained expereince using reusable compnents and sql commands. <br>
     
        
      </p>
        <a target="_blank" href='error_document.pdf'>Database Error Pdf</a>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}