
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqxXIVKJFYMW-KzWeyztDujlpmebFpTSI",
  authDomain: "jiyatest-2585c.firebaseapp.com",
  databaseURL: "https://jiyatest-2585c-default-rtdb.firebaseio.com",
  projectId: "jiyatest-2585c",
  storageBucket: "jiyatest-2585c.appspot.com",
  messagingSenderId: "921742175152",
  appId: "1:921742175152:web:c4ab485c2dd2a6453d8475"
};
firebase.initializeApp(firebaseConfig);
function getData()
{
  firebase.database().ref("/").on('value',)
}

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

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
