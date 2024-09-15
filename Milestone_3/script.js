// Get referance to the form and displa area
var form = document.getElementById('resume-form');
var resumeDisplyElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values 
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generat the resume contant dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> ".concat(name, " </p>\n<p><b>Phone:</b> ").concat(phone, " </p>\n<p><b>Email:</b> ").concat(email, " </p>\n\n<h3>Education</h3>\n<p> ").concat(education, "</p>\n\n<h3>Experience</h3>\n<p> ").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p> ").concat(skills, "</p>\n");
    // DISPLY GENERATED RESUME
    if (resumeDisplyElement) {
        resumeDisplyElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing. ');
    }
});
