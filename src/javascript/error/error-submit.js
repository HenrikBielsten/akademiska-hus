import base64 from 'base-64';
document.getElementById('reportForm').addEventListener('submit', postData);


 function postData(event){
            event.preventDefault();

            let name = document.getElementById('name').value;
            let phone = document.getElementById('phone').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            let user_id = 1;

            var filesArray = [];

            if (localStorage.images) {
              filesArray = JSON.parse(localStorage.getItem('images'));
            }
            var building_id = "";
            if (localStorage.building_id) {
              building_id = localStorage.getItem('building_id');
              console.log("exist");
            }

            var $counter= 0;
            var imgArray = {};

            $.each(filesArray, function( index, value ) {

              $counter += 1;
              imgArray["image"+$counter] = this;


            });

            let image1 = "";
            let image2 = "";
            let image3 = "";
            let image4 = "";

            if (imgArray['image1']) {
              image1 = base64.decode(imgArray['image1']);
            }
            if (imgArray['image2']) {
              image2 = base64.decode(imgArray['image2']);
            }
            if (imgArray['image3']) {
              image3 = base64.decode(imgArray['image3']);
            }
            if (imgArray['image4']) {
              image4 = base64.decode(imgArray['image4']);
            }



            if (!name || !phone || !email || !message) {
              return false;
            }

            let reqBody = {
              user_id: user_id,
              building_id: building_id,
              name: name,
              phone: phone,
              email: email,
              message: message,
              image_1: image1,
              image_2: image2,
              image_3: image3,
              image_4: image4
            };


            fetch('http://localhost:8888/api/problem_report', {
              method: "POST",
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(reqBody)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))



            setTimeout(function() {
          localStorage.clear();
          window.location.href = "report-received.html";
        }, 1000);



        }
