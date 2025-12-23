import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9M1LcVIivLlNBDxaJRiV-7Lb0fLo3yrg",
  authDomain: "web-apk-kepegawaian.firebaseapp.com",
  databaseURL: "https://web-apk-kepegawaian-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-apk-kepegawaian",
  storageBucket: "web-apk-kepegawaian.appspot.com",
  messagingSenderId: "458664240424",
  appId: "1:458664240424:web:096019e5f5f2ea83049c1d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ASN
onValue(ref(db, "pegawai/asn"), (snapshot) => {
  const data = snapshot.val();
  document.getElementById("jumlahASN").innerText =
    data ? Object.keys(data).length : 0;
});

// NON ASN
onValue(ref(db, "pegawai/non_asn"), (snapshot) => {
  const data = snapshot.val();
  document.getElementById("jumlahNonASN").innerText =
    data ? Object.keys(data).length : 0;
});

