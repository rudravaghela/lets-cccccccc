//YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAevIa4-QDFuuIa0qOwQu1sZurer1zIzAo",
    authDomain: "kwitter-8cc73.firebaseapp.com",
    databaseURL: "https://kwitter-8cc73-default-rtdb.firebaseio.com",
    projectId: "kwitter-8cc73",
    storageBucket: "kwitter-8cc73.appspot.com",
    messagingSenderId: "646103554819",
    appId: "1:646103554819:web:34dc5bb9c7ad80bdf46736"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
      message:msg,
like:0   
   });

document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index2.html";
}


  