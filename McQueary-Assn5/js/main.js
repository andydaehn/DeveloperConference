


/*This is for the registration form Workshops*/
function ValidateWorkshop() {

    var ws1 = document.getElementById("podcast");
    var ws2 = document.getElementById("group2");
    var ws3 = document.getElementById("group3");

    var work1 = document.getElementsByName("group12");

    if (work1 == "videotrain"){
        alert("you cant pick anything in workshop 2")
    }

    /*if(name.elements["group1"].value == "videotrain"){
        alert("Since you have selected " + name.elements["group1"].value + ", you may not select anything in Gamification.")
    }*/

}
function AlertTest(){

    var pickOne = document.getElementById("day1");
    var selectB = pickOne.elements["group1"].value;
    var picktwo = document.getElementById("day2");
    var selectF = picktwo.elements["group2"].value;
    var pickthree = document.getElementById("day3");
    var selectH = pickthree.elements["group3"].value;



    /*if b is selected in group 1, no selections can be made in group 2*/


    if(selectB == "videotrain"){
        alert("you have selected " + selectB + " and can not choose an option in Gamification.");
    }

    if((selectF == "elearning") && (selectH != "virtual")){
        alert("You must pair Building eLearning Games and Virtual Reality Training together.")
    }
}



/*This is for the poll thank you box*/
function AwardBox() {

    var name = document.getElementById("polls");
    alert("Thank you for showing "+ name.elements["poll"].value + " some love!");

}
