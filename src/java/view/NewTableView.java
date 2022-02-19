package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.newTable.*;

// classes in my project
import dbUtils.*;

public class NewTableView {

    public static StringDataList getAllTables(DbConn dbc) {
   

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList(); 
        
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        
        try {
            String sql = "SELECT card_id, card_name, img, price, brand, cuda_cores, graphics_table.web_user_id, user_email, user_password "
                    + "FROM graphics_table, web_user where graphics_table.web_user_id = web_user.web_user_id "
                    + "ORDER BY card_id ";  // you always want to order by something, not just random order.
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                
                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.

                // plainInteger returns integer converted to string with no commas.
                sd.cardId = FormatUtils.plainInteger(results.getObject("card_id"));
                sd.cardName = FormatUtils.formatString(results.getObject("card_name"));   
                sd.img = FormatUtils.formatString(results.getObject("img"));
                sd.price = FormatUtils.formatDollar(results.getObject("price"));
                sd.brand = FormatUtils.formatString(results.getObject("brand"));
                sd.cudaCores = FormatUtils.formatInteger(results.getObject("cuda_cores"));
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                
           
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in NewTableView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}