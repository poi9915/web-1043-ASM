function valid() {
    var name = document.forms["myForm"].name.value
    if (name == "") {
        document.getElementById("spName").innerHTML = "Name must be filled"
        return false
    }

    var email = document.forms["myForm"].email.value
    if (valdEmail(email) == 1) {
        document.getElementById("spEmail").innerHTML = "Email must be filled"
        return false
    } else if (valdEmail(email) == 2) {
        document.getElementById("spEmail").innerHTML = "Email wrong"
        return false
    }

    var age = document.forms["myForm"].age.value
    if (isNaN(age) || age < 1) {
        document.getElementById("spAge").innerHTML = "Age must be filled"
        return false
    } else if (age > 100) {
        document.getElementById("spAge").innerHTML = "U live to long lol"
        return false
    }
    var pass = document.forms["myForm"].password.value
    var repass = document.forms["myForm"].confirm_password.value

    if (pass == "") {
        document.getElementById("spPass").innerHTML = "Password must filled"
        return false
    }
    if (!(repass === pass)) {
        document.getElementById("spRePass").innerHTML = "Confirm pass must correct with pass"
        return false
    }
    var Checker = document.getElementsByName("gender")
    if (!Checker[0].checked === true && !Checker[1].checked === true){
        document.getElementById("spBtn").innerHTML = "Check 1 of them pls"
        return false
    }
    var date = parseInt(document.forms["myForm"].dob.value)
    if (isNaN(date)){
        document.getElementById("spDOB").innerHTML = "You birthday pls "
        return false
    }

    return true

}

function valdEmail(em) {
    if (em == "") {
        return 1;
    }
    const rend = new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/", "g")

    if (rend.test(email)) {
        return 2
    }
}