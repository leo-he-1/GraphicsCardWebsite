package model.newTable;

import model.newTable.*;

/* The purpose of this class is just to "bundle together" all the 
 * data values that you would get from a single row of a result set
 * from joining the web_user database table with the user_role table. 

 * All fields are declared as type String (even fields might be a
 * different type in the database, like date or decimal). We do this 
 * for two reasons: 
 *     1. so we can store nicely formatted data (e.g., with $s in it). 
 *     2. so we can store "pre-validated" data that might not be able to 
 *        be converted to a valid value of the given type, for example 
 *        a user might have made a data entry error.  
 * 
 * There are no getter or setter methods since we are not trying to
 * protect this data in any way.  We want to let Java/JSP code have have
 * free access to put data in or take it out. */

public class StringData {

    public String cardId = "";
    public String cardName = "";
    public String img = "";
    public String price = "";
    public String brand = "";
    public String cudaCores = "";
    public String webUserId = "";


    public String errorMsg = "";

    // default constructor leaves all data members with empty string (Nothing null).
    public StringData() {
    }
    public int getCharacterCount() {
        String s = this.cardId + this.cardName + this.img + this.price + this.brand + this.cudaCores
                + this.webUserId;
        return s.length();
    }
    public String toString() {
        return "Card Id:" + this.cardId
                + ", Card Name: " + this.cardName
                + ", Img: " + this.img
                + ", Price: " + this.price
                + ", Brand: " + this.brand
                + ", cudaCores: " + this.cudaCores
                + ", Web User Id: " + this.webUserId;
    }

}