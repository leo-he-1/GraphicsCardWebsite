function drop (clickedEle, hideClass, showClass) {

    // console.log("clickedEle on next line");
    // console.log(clickedEle);

    // getElementsByTagName returns an array of all the elements (from the starting 
    // point which is the parent of the clicked div. Selecting the [1] element should get 
    // us to the drpContent div. 
    var nextEle = clickedEle.parentElement.getElementsByTagName("div")[1];
    // console.log("nextEle on next line");
    // console.log(nextEle);

    if (nextEle.classList.contains(showClass)) {
        hide(nextEle);
    } else {
        show(nextEle);
    }


    /* Note: I could have just added and removed class "show" (and not even have a "hide" class) 
     * but I wanted to also animate the dropcontents as they leave the screen...  */
    function hide(ele) {
        ele.classList.remove(showClass);
        ele.classList.add(hideClass);
    }

    function show(ele) {
        ele.classList.remove(hideClass);
        ele.classList.add(showClass);
    }

} // end function dropdown