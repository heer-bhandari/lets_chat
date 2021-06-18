
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
 user_name =  localStorage.getItem("user_name");
 document.getElementById("h3").innerHTML = "WELCOME " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;     
//End code
      });});}
getData();

function add_room (){
      room_name = document.getElementById("text_input2").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
        });
        localStorage.setItem("room_name" , room_name);
        window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name );
window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}