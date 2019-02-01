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
      
      var dateAdded = firebase.database.ServerValue.TIMESTAMP;

      var employeeDt = {
           name:empName,
           role:empRole,
           startdate:empStartDt,
           rate:empRate,
           dateAdded: dateAdded
      }

      employeeDb.ref().push(employeeDt);

      return false;

  })

  employeeDb.ref().on("child_added",function(childSnapshot){
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startdate);
      console.log(childSnapshot.val().rate);
      console.log(childSnapshot.val().dateAdded);

     
      var convertedStDt = moment(childSnapshot.val().startdate, "YYYY-DD-MM");
      var monthsWorked = moment().diff(convertedStDt,"Months");
      console.log("months worked",monthsWorked);

      var totalBill = monthsWorked * childSnapshot.val().rate;

      $("#empRow").append("<tr><td>"+ childSnapshot.val().name + "</td><td>"+ childSnapshot.val().role +
      "</td><td>"+ childSnapshot.val().startdate +"</td><td>"+ monthsWorked +
      "</td><td>" + childSnapshot.val().rate + "</td><td>" + totalBill + "</td>" )
  })