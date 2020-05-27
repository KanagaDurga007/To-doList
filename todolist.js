function addTask(){
    var textContent = document.getElementById("text1").value;
    var checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked="true";
    var checkboxLength = document.querySelectorAll('input[type="checkbox"]').length;
    //var checkboxLength = document.querySelector('input[type="checkbox"]').length;
    checkbox.id = "check"+checkboxLength;
    //var textContentNode = document.createTextNode(textContent);
    //checkbox.appendChild(textContentNode);
    var division = document.getElementById("div2");
    division.appendChild(checkbox);
    division.appendChild(document.createTextNode(textContent));
    
}