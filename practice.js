//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDxQNs98DvI1ZReY1IXrNC7MJazZ4LXgAc",
    authDomain: "project44-f35d1.firebaseapp.com",
    databaseURL: "https://project44-f35d1-default-rtdb.firebaseio.com",
    projectId: "project44-f35d1",
    storageBucket: "project44-f35d1.appspot.com",
    messagingSenderId: "129960493560",
    appId: "1:129960493560:web:9223503f3dab151305960d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser(){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child("user_name").update({
    purpose : "adding user"
});

}
