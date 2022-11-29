const firebaseConfig = {
  apiKey: "AIzaSyDuMz5dtXNFJ1foYBuZZtfY8YEMhsivKWM",
  authDomain: "vamosconversar-e5ce1.firebaseapp.com",
  databaseURL: "https://vamosconversar-e5ce1-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-e5ce1",
  storageBucket: "vamosconversar-e5ce1.appspot.com",
  messagingSenderId: "1032214728181",
  appId: "1:1032214728181:web:10291c45b4b969beede4bc"
};

firebase.initializeApp(firebaseConfig);

function addUser() {

  userName = document.getElementById("userName").value;

  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html";
}

