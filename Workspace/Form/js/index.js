function validateCheckbox(){
    var checkboxes = document.getElementsByName("check");
    var a = 0;

    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            a++;  
    }  
    if(a<1)  
    {  
        alert("You need to check at least one of the choices.");  
    }  
}

function validateDropbox(){
   
        var dropbox = document.getElementsByName("eType");
        var selected = dropbox.options[dropbox.selectedIndex].value;

        var selected = dropbox.options[dropbox.selectedIndex].text;
        if(selected==0)
        {
            alert("Please choose one...");
        }
}

function validateTextbox() {
    if (document.getElementById("11").value == "") {
        alert("Event Title may not be blank");
    } 
    else if (document.getElementById("22").value == "") {
        alert("The date may not be blank.");
    }
    else if (document.getElementById("33").value == "") {
        alert("The date may not be blank.");
    }
    else if (document.getElementById("44").value == "") {
        alert("The posting date may not be blank.");
    }
}



function validate(){

    var aa=document.getElementById("you").value;
    var bb=document.getElementById("Events").value;
    var cc=document.getElementById("11").value;
    var dd=document.getElementById("22").value;
    var ee=document.getElementById("33").value;
    var ff=document.getElementById("44").value; 
    if(aa|bb|cc|dd|ee|ff !=""){
    alert("Successful Validation");
        alert("Event Type"+" "+bb+" \n"+" Event Title is"+" "+cc+"\n "+"Event dates"+" "+dd+" "+" To "+ee+" \n"+"Posting Dates: "+" "+ff)
        aa=document.getElementByName("check").value="";
        bb=document.getElementById("Events").value="";
        cc=document.getElementById("11").value="";
        dd=document.getElementById("22").value="";
        ee=document.getElementById("33").value="";
        ff=document.getElementById("44").value="";
    }
    else{
    validateCheckbox();
    validateTextbox();
    validateDropbox();
    } 
}