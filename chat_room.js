
var firebaseConfig = {
  apiKey: "AIzaSyAgAMJa9DkG4qtkRx19ys_W4QhTtxxONw4",
  authDomain: "kwitter-app-79ba8.firebaseapp.com",
  databaseURL: "https://kwitter-app-79ba8-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-79ba8",
  storageBucket: "kwitter-app-79ba8.appspot.com",
  messagingSenderId: "746723569098",
  appId: "1:746723569098:web:0822a70c796b23f110b333"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);














  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}