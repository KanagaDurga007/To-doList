function addTask(){
    var textContent = document.getElementById("text1").value;
    alert(String(textContent).length);
    if(String(textContent).length > 0){
    var divisionList = document.createElement("div");
    divisionList.className = "seperateDiv";
    var seperateDivLen = document.querySelectorAll(".seperateDiv").length;
    divisionList.id = "seperateDivLen" + seperateDivLen;
    //alert(divisionList.id);
    var checkbox = document.createElement("input");
    checkbox.className="checklist";
    checkbox.type="checkbox";
    checkbox.checked="true";
    //var checkboxLength = document.querySelectorAll('input[type="checkbox"]').length;
    checkbox.id = "check"+seperateDivLen;
    var division = document.getElementById("tasklist");
    division.appendChild(divisionList);
    divisionList.appendChild(checkbox);
    divisionList.appendChild(document.createTextNode(textContent));
    //var space = document.createElement("br");
    //division.appendChild(space);

    checkbox.onclick = (function(){
        if(checkbox.checked == false){
            //console.log(document.getElementById(checkbox.id));
            console.log(checkbox.id);
            division.removeChild(document.getElementById(divisionList.id));

        }
    });
}
}