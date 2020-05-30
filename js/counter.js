var idy="top_english"
var xhttp8 = new XMLHttpRequest();
xhttp8.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
    }
};
xhttp8.open("POST", "https://breaktxt.000webhostapp.com/addView/", true);
xhttp8.onload=function(){

}
xhttp8.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp8.send("tableName="+idy);
