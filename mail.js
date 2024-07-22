const firebaseConfig = {
    apiKey: "AIzaSyBEekBqBJKlwVJhrT9k_fKhAyYPt6DMjJc",
    authDomain: "tigrinatribe.firebaseapp.com",
    databaseURL: "https://tigrinatribe-default-rtdb.firebaseio.com",
    projectId: "tigrinatribe",
    storageBucket: "tigrinatribe.appspot.com",
    messagingSenderId: "62423708752",
    appId: "1:62423708752:web:b915f89a7b4851ee130d55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactDB = firebase.database().ref('contact');

// Add event listener to the form
document.querySelector('.form').addEventListener("submit", sendContact);

function sendContact(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var msg = getElementVal('msg');

    saveMessages(name, email, msg);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.querySelector('.form').reset();
}

const saveMessages = (name, email, msg) => {
    var newContact = contactDB.push();
    newContact.set({
        name: name,
        email: email,
        msg: msg,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
