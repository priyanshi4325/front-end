function validation() {
    result = true;
    //Start User Name Validation
    let name = document.getElementById("uname").value;
    if (name == "") {
        result = false;
    }
    //End User Name Validation

    //Start Father's Name Validation
    let fname = document.getElementById("fname").value;
    if (fname == "") {
        result = false;
    }
    //End Father's Name Validation

    //Start Password Validation
    let pass = document.getElementById("pass").value;
    if (pass == "") {
        result = false;
    }
    //End Password Validation

    //Start DOB Validation
    let dob = document.getElementById("dob").value;
    if (dob == "") {
        result = false
    }
    //End DOB Validation

    //Start Email Validation
    let email = document.getElementById("uemail").value;
    if (email == "") {
        result = false;
    }
    //End Email Validation

    //Start TOB Validation
    let tob = document.getElementById("tob").value;
    if (tob == "") {
        result = false
    }
    //End TOB Validation

    //Start Mobile Number Validation
    let num = document.getElementById("num").value;
    if (num == "") {
        result = false;
    }
    //End Mobile Number Validation

    //Start Photo Validation
    let photo = document.getElementById("photo").value;
    if (photo == "") {
        result = false;
    }
    //End Photo Validation

    //Start Address Validation
    let add = document.getElementById("temp_add").value;
    if (add == "") {
        result = false;
    }
    //End Address Validation

    //Start City Validation
    let city = document.getElementById("city").value;
    if (city == "") {
        result = false;
    }
    //End City Validation

    //Start Gender Validation
    let gender_result = false;
    let counter = document.getElementsByName("gender").length;
    let gender = document.getElementsByName("gender");
    for (i = 0; i < counter; i++) {
        if (gender[i].checked == true) {
            gender_result = true;

        }
    }
    if (gender_result == false) {
        result = false;
    }
    //End Gender Validation

    //Start Hobbies Validation
    let hobby_result = false;
    let counter2 = document.getElementsByName("hobby").length;
    let hobby = document.getElementsByName("hobby");
    let check_count = 0
    for (var i = 0; i < counter2; i++) {
        if (hobby[i].checked == true) {
            check_count++;
        }
    }
    if (check_count >= 3) {
        hobby_result = true;
    }
    else {
        result = false;
    }
    //End Hobbies Validation
    if (result == true) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
    return result;

}

function yes_btn() {
    var temp = document.getElementById("temp_add").value;
    var perm = document.getElementById("perm_add")
    perm.value = temp;
    perm.readOnly = true;
}

function no_btn() {
    var temp = document.getElementById("temp_add").value;
    var perm = document.getElementById("perm_add");
    perm.value = "";
    perm.readOnly = false;
    document.getElementById("permadd_error_msg").innerText = "Please input your permanent address."
}

function text_del() {
    var data = document.getElementById("temp_add").value;
    document.getElementById("perm_add").value = data;
}

function uname_check() {
    //Start Name Type Validation
    var name = document.getElementById("uname").value;
    document.getElementById("uname_error_msg").innerText = "Please enter name."
    if (name != "") {
        document.getElementById("uname_error_msg").innerText = ""
    }
    else {
        document.getElementById("uname_error_msg").innerText = "Please enter name."
    }
    //End Name Type Validation
}

//Start Father's Name Type Validation
function fname_check() {

    var fname = document.getElementById("fname").value;
    if (fname != "") {
        document.getElementById("fname_error_msg").innerText = ""
    }
    else {
        document.getElementById("fname_error_msg").innerText = "Please enter father's name."
    }
}
//End Father's Name Type Validation

//Start Password Type Validation
function pass_check() {

    var pass = document.getElementById("pass").value;

    if (pass != "") {
        document.getElementById("pass_error_msg").innerText = ""
        document.getElementById("pass_cond").style.display = "block";
        document.getElementById("pass_cond").style.visibility = "visible";
        var EightChar = new RegExp('(?=.{8,})');
        var UpperCase = new RegExp('(?=.*[A-Z])');
        var LowerCase = new RegExp('(?=.*[a-z])');
        var NumberCase = new RegExp('(?=.*[0-9])');
        var SpecialCase = new RegExp('(?=.*[!@#$%^&])');

        if (EightChar.test(pass)) {
            document.getElementById("eight_char").style.color = "green"
        }
        else {
            document.getElementById("eight_char").style.color = "red"
        }

        if (UpperCase.test(pass)) {
            document.getElementById("one_upper").style.color = "green"
        }
        else {
            document.getElementById("one_upper").style.color = "red"
        }

        if (LowerCase.test(pass)) {
            document.getElementById("one_lower").style.color = "green"
        }
        else {
            document.getElementById("one_lower").style.color = "red"
        }

        if (NumberCase.test(pass)) {
            document.getElementById("one_digit").style.color = "green"
        }
        else {
            document.getElementById("one_digit").style.color = "red"
        }

        if (SpecialCase.test(pass)) {
            document.getElementById("one_special").style.color = "green"
        }
        else {
            document.getElementById("one_special").style.color = "red"
        }

    }
    else {
        document.getElementById("pass_error_msg").innerText = "Please enter password.";
        document.getElementById("pass_cond").style.display = "none";
        document.getElementById("pass_cond").style.visibility = "hidden";

    }
}
//End Password Type Validation

//Start DOB Type Validation
function dob_check() {
    var dob = document.getElementById("dob").value;
    if (dob != "") {
        document.getElementById("dob_error_msg").innerText = ""
    }
    else {
        document.getElementById("dob_error_msg").innerText = "Please enter date of birth."
    }
}
//End DOB Type Validation

//Start Email Type Validation
function email_check() {

    var uemail = document.getElementById("uemail").value;
    if (uemail != "") {
        document.getElementById("uemail_error_msg").innerText = ""
    }
    else {
        document.getElementById("uemail_error_msg").innerText = "Please enter email id."
    }
}
//End Email Type Validation

//Start TOB Type Validation
function tob_check() {
    var tob = document.getElementById("tob").value;
    if (tob != "") {
        document.getElementById("tob_error_msg").innerText = ""
    }
    else {
        document.getElementById("tob_error_msg").innerText = "Please enter time of birth."
    }
}
//End TOB Type Validation

//Start Mobile Number Type Validation
function num_check() {
    var num = document.getElementById("num").value;
    var num_count = document.getElementById("num").value.length;
    if (num != "") {
        document.getElementById("num_error_msg").innerText = ""
        if (num_count > 10) {
            document.getElementById("num_error_msg").innerText = "Number cannot be more than 10 digits"
        }
        else if (num_count < 10) {
            document.getElementById("num_error_msg").innerText = "Number cannot be less than 10 digits"
        }
        else {
            document.getElementById("num_error_msg").innerHTML = "<span style='color:green;'>✅ Valid number</span>";
        }
    }
    else {
        document.getElementById("num_error_msg").innerText = "Please enter mobile number."
    }
}
//End Mobile Number Type Validation

//Start Profile Photo Type Validation
function photo_check() {
    var photo = document.getElementById("photo").value;
    if (photo != "") {
        document.getElementById("photo_error_msg").innerText = ""
    }
    else {
        document.getElementById("photo_error_msg").innerText = "Please select profile photo."
    }
}
//End Profile Photo Type Validation

//Start City Type Validation
function city_check() {
    var city = document.getElementById("city").value;
    if (city != "") {
        document.getElementById("city_error_msg").innerText = ""
    }
    else {
        document.getElementById("city_error_msg").innerText = "Please enter city."
    }
}
//End City Type Validation

//Start Address Type Validation
function add_check() {
    var temp_add = document.getElementById("temp_add").value;
    var perm_add = document.getElementById("perm_add").value;
    if (temp_add != "") {
        document.getElementById("tempadd_error_msg").innerText = ""
    }
    else {
        document.getElementById("tempadd_error_msg").innerText = "Please enter temporary address."
    }
    if (perm_add != "") {
        document.getElementById("permadd_error_msg").innerText = ""
    }
    else {
        document.getElementById("permadd_error_msg").innerText = "Please enter permanent address."
    }
}
//End Address Type Validation

//Start Gender Type Validation
function gender_check() {
    var count = document.getElementsByName("gender").length;
    var gender = document.getElementsByName("gender");
    for (var i = 0; i < count; i += 1) {
        if (gender[i].checked == true) {
            document.getElementById("gender_error_msg").innerText = ""
        }
    }
}
//End Gender Type Validation

//Start Hobby Type Validation
function hobby_check() {
    var hobby = document.getElementsByName("hobby");
    var check_count = 0
    for (var i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            check_count++;
        }
    }

    if (check_count >= 3) {
        document.getElementById("hobby_error_msg").innerText = ""
    }
    else if (check_count < 3 && check_count > 0) {
        document.getElementById("hobby_error_msg").innerText = "Please select at least 3 hobbies.";
    }
    else {
        document.getElementById("hobby_error_msg").innerText = "Please select a hobby.";
    }
}
//End Hobby Type Validation

function MaxLength(e) {
    var num = document.getElementById("num").value.length;
    if (num >= 10) {
        return false
    }
    else {
        return true
    }
}
function show() {
    var p = document.getElementById("pass");
    var s = document.getElementById("open_eye");
    var h = document.getElementById("close_eye");
    p.type = "text"
    s.style.display = "inline-flex"
    h.style.display = "none"
}
function hide() {
    var p = document.getElementById("pass");
    var s = document.getElementById("open_eye");
    var h = document.getElementById("close_eye");
    p.type = "password"
    s.style.display = "none"
    h.style.display = "inline-flex"
}