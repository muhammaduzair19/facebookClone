
import { collection, getFirestore, app, db, doc, getDoc, onAuthStateChanged, auth } from "../firebase.js";

const username = document.getElementById('user-name')
const postusername = document.getElementById('post-username')
const postinput = document.getElementById('postinput')
const createPost = document.querySelector('.createPost')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')



onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        getUserData(uid);
        console.log(uid)
    } else {
        // User is signed out
        // ...

        window.location.href = '../index.html'

    }
});

async function getUserData(data) {
    console.log(data)
    const docRef = doc(db, "users", data);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        const { firstName, surName } = docSnap.data();
        console.log("Document data:", docSnap.data());
        username.innerHTML = `${firstName} ${surName}`;
        postusername.innerHTML = `${firstName} ${surName}`;

    } else {
        console.log("No such document!");
    }
}

postinput.addEventListener("click", postHandler)
close.addEventListener("click", postHandlerClose)

function postHandler(){
    createPost.style.display = "block"
    overlay.style.display = "block"
}
function postHandlerClose(){
    console.log("working")
    overlay.style.display = "none"
    createPost.style.display = "none"
}
