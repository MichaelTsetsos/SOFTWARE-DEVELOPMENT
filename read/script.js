function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(this.responseXML);// this refers to the XMLHttpRequest object you just created. The data is stored in its responseXML property. You should define your own callback function here to manipulate the data retrieved from the server.
           display(this)
        }
    };

    xhttp.open("GET", "sample.xml", true);
    xhttp.send();
    document.getElementById("print").innerHTML = this;
}
function display(xml) {

}


