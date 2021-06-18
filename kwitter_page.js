
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAUaMIC5mHMckjugs6pupH6ETBbxpFP7Hs",
      authDomain: "kwitter-e41eb.firebaseapp.com",
      databaseURL: "https://kwitter-e41eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-e41eb",
      storageBucket: "kwitter-e41eb.appspot.com",
      messagingSenderId: "802512642538",
      appId: "1:802512642538:web:76dab0ee58117fddd79293"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function home_screen(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send_m (){
      meg = document.getElementById("input_123").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:meg,
            like:0
      });
document.getElementById("input_123").value = "";
}