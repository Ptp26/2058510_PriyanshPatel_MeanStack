function addData(){

    BlogName = document.getElementById("BlogName").value;
    GenreName = document.getElementById("GenreName").value;
    Link = document.getElementById("Link").value;

    var array = JSON.parse(localStorage.getItem("array") || "[]");
    var TB = {
        bname : BlogName,
        gname : GenreName,
        link : Link,

    };
    array.push(TB);
    localStorage.setItem("array", JSON.stringify(array));
    console.log("The blog has been added");
}

function displayData(){

    var array = JSON.parse(localStorage.getItem("array" || "[]"));
    var displaytable = "";
    var table = "<table border = 1><tr><th>Blog Name</th><th>Genre Name</th><th>Link</th></tr>"
    array.forEach(element => {
        displaytable +=  "<tr><td>" +element.bname+ "</td><td>" +element.gname+ "</td><td>$"+element.link+"</td></tr>"
    });
    var displaytable = table + displaytable;
    document.getElementById("Btable").innerHTML = displaytable;
}