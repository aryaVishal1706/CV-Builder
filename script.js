function addNewWEField() {
     let weDiv = document.getElementById('we');
     let addButton = document.getElementById('weAddButton');

     let newTextArea = document.createElement('textarea');
     newTextArea.classList.add('form-control', 'weField', 'mt-3');
     newTextArea.setAttribute('rows', '2');
     addButton.classList.add('weField')
     newTextArea.setAttribute('placeholder', 'Enter Your Experience');

     weDiv.appendChild(newTextArea); // Append new textarea to the weDiv element
}

function addNewAQField() {
     let aqDiv = document.getElementById('aq');
     let addButton = document.getElementById('aqAddButton');

     let newTextArea = document.createElement('textarea');
     newTextArea.classList.add('form-control', 'aqField', 'mt-3');
     newTextArea.setAttribute('rows', '2');
     newTextArea.setAttribute('placeholder', 'Enter Your Academic Qualification');

     aqDiv.appendChild(newTextArea); // Append new textarea to the aqDiv element
}


function generateCV() {
     const name = document.getElementById("namefield").value;
     const contact = document.getElementById("contactfield").value;
     const address = document.getElementById("addressfield").value;
     const objective = document.getElementById("objectivefield").value;
     const workExperience = document.getElementById("expirencefield").value;
     const academicQualification = document.getElementById("educationfield").value;

     document.getElementById("nameT1").textContent = name;
     document.getElementById("nameT2").textContent = name;
     document.getElementById("contactT").textContent = contact;
     document.getElementById("addressT").textContent = address;
     document.getElementById("objectiveT").textContent = objective;


     //  academic qualification
     const academicQualificationList = document.getElementById("aqT");
     academicQualificationList.innerHTML = "";

     const academicQualificationItems = document.getElementsByClassName("aqField");
     for (let i = 0; i < academicQualificationItems.length; i++) {
          const item = academicQualificationItems[i].value.trim();
          if (item !== "") {
               const academicQualificationItem = document.createElement("li");
               academicQualificationItem.textContent = item;
               academicQualificationList.appendChild(academicQualificationItem);
          }


     }


     //   Work Expirence
     const workExperienceList = document.getElementById("weT");
     workExperienceList.innerHTML = "";

     const workExperienceItems = document.getElementsByClassName("weField");
     for (let i = 0; i < workExperienceItems.length; i++) {
          const item = workExperienceItems[i].value.trim();
          if (item !== "") {
               const workExperienceItem = document.createElement("li");
               workExperienceItem.textContent = item;
               workExperienceList.appendChild(workExperienceItem);
          }
     }


     // let img= document.getElementById('photofield').files[0];
     let img = document.getElementById('imgfield').files[0];
     let reader = new FileReader();

     reader.onload = function (e) {
          document.getElementById('imgT').src = e.target.result;
     }

     if (img) {
          reader.readAsDataURL(img);
     }


     document.getElementById('cv-form').style.display = 'none'
     document.getElementById('cv-template').style.display = 'block'


}


// function printcv() {
//      window.print()
// }

function editcv() {
     document.getElementById('cv-form').style.display = 'block'
     document.getElementById('cv-template').style.display = 'none'
}


function printcv() {
     const cvForm = document.getElementById("cv-form");
     const cvTemplate = document.getElementById("cv-template");

     if (cvForm.style.display === "none" && confirm("Are you sure you want to print the CV?")) {
          cvTemplate.classList.add("print-style");
          window.onbeforeprint = function () {
               // Adjust element positioning here
               var element = document.getElementById('element-id');
               element.style.position = 'absolute';
               element.style.top = '100px';
               element.style.left = '200px';
          };

          window.print();

          // Restore form style after printing
          cvTemplate.classList.remove("print-style");

          // Show the form again
          cvForm.style.display = "block";
          cvTemplate.style.display = "none";
     } else {
          alert("Please generate the CV before printing.");
     }
}
