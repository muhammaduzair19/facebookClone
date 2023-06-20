const newaccount = document.querySelector('.new-account');
const overlay = document.querySelector('.overlay')
const signup = document.querySelector('.signup-container')
const loginbtn = document.getElementById('login')
const signupbtn = document.getElementById('signup');
var firstName = document.getElementById('firstName')
var surName = document.getElementById('surName')
var sEmail = document.getElementById('signUpEmail')
var sPassword = document.getElementById('signUpPassword')
let day = document.getElementById('day').value
let month = document.getElementById('month').value
let year = document.getElementById('year').value
let gender;
let users = JSON.parse(localStorage.getItem('users')) || [];


function showSignUp() {
    overlay.classList.toggle('hidden')
    signup.classList.toggle('hidden')
}
function hideSignUp() {
    overlay.classList.toggle('hidden')
    signup.classList.toggle('hidden')
}

function login() {
    var loginEmailOrNumber = document.querySelector('.login-email-number');
    var loginpassword = document.querySelector('.login-password');

    if (loginEmailOrNumber.value == "" || loginpassword.value == "") {
        alert("please enter correct email or password");
    }


    const userRegistered = users.filter((user) => {
        return user.email === loginEmailOrNumber.value;
    })
    console.log(userRegistered)

    if (!userRegistered.length) return alert("This email is not registered, please create new account")

    if(userRegistered[0].password === loginpassword.value){
        localStorage.setItem('isLoggedInUser', JSON.stringify(userRegistered[0]))
        window.location.href="./dashboard/index.html";
    }


}

function getGender(g) {
    gender = g;
}



signupbtn.addEventListener('click', () => {

    if (firstName.value !== "" && surName.value !== "" && sEmail.value !== "" && sPassword.value !== "" && gender !== undefined && day !== undefined && month !== undefined && year !== undefined) {

        if (sPassword.value.length < 8) return alert("Password should contain atleast 8 letters")

        userObj = {
            firstName: firstName.value,
            surName: surName.value,
            email: sEmail.value,
            password: sPassword.value,
            gender,
            dateOfBirth: new Date(`${year}-${month}-${day}`)
        }
        users.push(userObj)

        localStorage.setItem('users', JSON.stringify(users))
        alert("sign successfully")

        firstName.value = "";
        surName.value = "";
        sEmail.value = "";
        sPassword.value = "";
        hideSignUp();
    }
    else {
        alert('kindly fill all the fields')
    }
})


