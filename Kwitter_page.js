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
  user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();


