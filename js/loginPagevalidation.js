

// 0: "Worst ☹",
// 1: "Bad ☹",
// 2: "Weak ☹",
// 3: "Good ☺",
// 4: "Strong ☻"
// }

// var password = document.getElementById('exampleInputPassword1');
// var meter = document.getElementById('password-strength-meter');
// var text = document.getElementById('password-strength-text');

// password.addEventListener('input', function()
// {
//     var val = password.value;
//     var result = zxcvbn(val);

//     // Update the password strength meter
//     meter.value = result.score;
   
//     // Update the text indicator
//     if(val !== "") {
//         text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + 
//         "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions +
//          "</span"; 
//     }
//     else {
//         text.innerHTML = "";
//     }
// });








function ValidateEmail()
{
var inputText= document.getElementById("exampleInputEmail1");
var inputpwd= document.getElementById("exampleInputPassword1");
var x ="";
var y = inputpwd.value.length;
var mailformat =  /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,9})+)$/;
// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(inputText.value.match(mailformat))
		{
   
      // window.open("./index.html", "_self");
    alert("Valid email address!");
    
		
		document.form1.text1.focus();
		return true;
    
		
    
  }
	else
		{
		alert("You have entered an invalid email address!");
		document.form1.text1.focus();
		return false;
		}
}


// var y ="";
// var inputPwd= document.getElementById("exampleInputPassword1");

// if (inputPwd.value>0)
// {
// 	y+=1;
// }
// if (x==1 && y>0)
// {
// 	 window.open("./index.html", "_self");

