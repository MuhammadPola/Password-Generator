function generate(){
    // declare variable to prevent undefine variable error 
    var upperChar  = lowerChar =  numbers =  symbols =  allChar =  password = "";

    // length value
    var passwordLength = document.getElementById('length').value;
    document.getElementById("d-length").innerHTML = passwordLength;

    // upper case
    if (document.getElementById('upper').checked) {
        upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    // lower case
    if (document.getElementById('lower').checked) {
        lowerChar = "abcdefghijklmnopqrstuvwxyz";
    }

    // numbers
    if (document.getElementById('number').checked) {
        numbers = "1234567890";
    }

    //symbols
    if (document.getElementById('symbol').checked) {
        symbols = "!@#$%^&*()_+-";
    }

    // all checked checkboxes
    allChar = upperChar +  lowerChar + numbers + symbols;

    for (var i = 0; i < passwordLength ; i++) {
        password = password + allChar.charAt(Math.floor(Math.random() * allChar.length));
    }

    //show result
    document.getElementById('result').value = password;
}


function copy(){
    var copyText = document.getElementById('result');

    // copy password
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    // show copied comment
    document.getElementById('liveToast').classList.replace("hide","show")
}

function closeBtn(){
    document.getElementById('liveToast').classList.replace("show","hide");
}

// created by Muhammad Pola Jwammer

   
    
