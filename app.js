var config = {
    apiKey: "AIzaSyBxfBeQ0EjsYZMoMmCZs2yoJIuufzz0_AA",
    authDomain: "employeetracker-6baf0.firebaseapp.com",
    databaseURL: "https://employeetracker-6baf0.firebaseio.com",
    projectId: "employeetracker-6baf0",
    storageBucket: "",
    messagingSenderId: "23495182849"
  };
  firebase.initializeApp(config);

  var employeeDb = firebase.database();

  $("#submitBtn").on("click", function(){
      var empName = $("#nameInput").val().trim();
      var empRole = $("#roleInput").val().trim();
      var empStartDt = $("#startDateInput").val().trim();
      var empRate = $("#rateInput").val().trim();

      console.log(empName);
      console.log(empRole);
      console.log(empStartDt);
      console.log(empRate);

      var employeeDt = {
           name:empName,
           role:empRole,
           startdate:empStartDt,
           rate:empRate
      }

      employeeDb.ref().push(employeeDt);
    

      return false;

  })



