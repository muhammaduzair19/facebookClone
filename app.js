import { auth, app, db, getAuth, getFirestore, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, setDoc} from "./firebase.js";




const newaccount = document.getElementById('new-account');
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close')
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

close.addEventListener('click', () => {
    console.log("helloc")
    overlay.classList.add('hidden')
    signup.classList.add('hidden')
})

newaccount.addEventListener('click', () => {
    console.log("helloc")
    overlay.classList.remove('hidden')
    signup.classList.remove('hidden')
})

function hideSignUp() {
    overlay.classList.add('hidden')
    signup.classList.add('hidden')
}


loginbtn.addEventListener('click', async () => {
    var loginEmailOrNumber = document.querySelector('.login-email-number');
    var loginpassword = document.querySelector('.login-password');
    try {
        const response = await signInWithEmailAndPassword(auth, loginEmailOrNumber.value, loginpassword.value)
        
        if(response.user){
            window.location.href = './dashboard/index.html'
        }
    } catch (error) {
        if(error.code == 'auth/user-not-found'){
            alert('kindly register your account')
            loginEmailOrNumber.value = '';
            loginpassword.value = '';

        }else if(error.code == 'auth/wrong-password'){
            alert('kindly enter the correct password')
            loginpassword.value = '';
        }
    }
})

signupbtn.addEventListener('click', async () => {

    try {
        const response = await createUserWithEmailAndPassword(auth, sEmail.value, sPassword.value)

        if (response.user) {
            addUserHandler(response.user.uid)
        }
    } catch (error) {
        console.log(error)
    }
})

const female = document.getElementById('female')
const male = document.getElementById('male')
const custom = document.getElementById('custom')

female.addEventListener('click', () => {
    gender = 'female';
    console.log(gender)
})
male.addEventListener('click', () => {
    gender = 'male';
    console.log(gender)
})
custom.addEventListener('click', () => {
    gender = 'custom';
    console.log(gender)
})

async function addUserHandler(uid) {
    try {
        await setDoc(doc(db, "users", uid), {
            firstName: firstName.value,
            surName: surName.value,
            email: sEmail.value,
            password: sPassword.value,
            dateOfBirth: new Date(`${year}-${month}-${day}`),
            gender,
        });
        setTimeout(() => {
            alert("login successffully")
            hideSignUp();
        }, 2000)

    } catch (error) {
        console.log(error)
    }
}


