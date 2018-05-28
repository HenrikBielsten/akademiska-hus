document.getElementById('reportForm').addEventListener('submit', postData);


 function postData(event){
            event.preventDefault();

            // let name = document.getElementById('name').value;
            // let phone = document.getElementById('phone').value;
            // let email = document.getElementById('email').value;
            // let message = document.getElementById('message').value;
            //
            //
            // if (!name || !phone || !email || !message) {
            //   return false;
            // }
            //
            // let reqBody = {
            //   name: name,
            //   phone: phone,
            //   email: email,
            //   message: message
            // };
            //
            // console.log("working");
            //
            // fetch('http://localhost:8888/api/problem_report', {
            //   method: "POST",
            //   headers: {'Content-Type':'application/json'},
            //   body: JSON.stringify(reqBody)
            // }).then((res) => res.json())
            // .then((data) =>  console.log(data))
            // .catch((err)=>console.log(err))


            window.location.href = "report-received.html";


        }
