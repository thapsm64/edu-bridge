// STUDENT FORM
const studentForm = document.getElementById("studentForm");

if (studentForm) {
    studentForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = {
            fullname: studentForm.fullname.value,
            email: studentForm.email.value,
            phone: studentForm.phone.value,
            dob: studentForm.dob.value,
            gender: studentForm.gender.value,
            field: studentForm.field.value,
            institution: studentForm.institution.value,
            year: studentForm.year.value,
            motivation: studentForm.motivation.value
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert("Student application submitted!");
            studentForm.reset();
            console.log(result);
        })
        .catch(err => {
            alert("Error submitting student form");
            console.error(err);
        });
    });
}




// SPONSOR FORM
const sponsorForm = document.getElementById("sponsorForm");

if (sponsorForm) {
    sponsorForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = {
            name: sponsorForm.name.value,
            email: sponsorForm.email.value,
            phone: sponsorForm.phone.value,
            type: sponsorForm.type.value,
            amount: sponsorForm.amount.value,
            field: sponsorForm.field.value,
            message: sponsorForm.message.value
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert("Sponsor application submitted!");
            sponsorForm.reset();
            console.log(result);
        })
        .catch(err => {
            alert("Error submitting sponsor form");
            console.error(err);
        });
    });
}

// impact section
let started = false;

function animateCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;

    const duration = 2000; // animation time (2 seconds)
    const increment = target / (duration / 16);

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.innerText = formatNumber(Math.ceil(current));
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = formatNumber(target);
      }
    };

    updateCounter();
  });
}
function formatNumber(num) {
  return num.toLocaleString();
}

// Fade-in effect
function fadeInBoxes() {
  const boxes = document.querySelectorAll('.impact-box');

  boxes.forEach(box => {
    const position = box.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 50) {
      box.style.opacity = 1;
      box.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("load", () => {
  const section = document.querySelector(".impact");

  window.addEventListener("scroll", () => {
    const sectionTop = section.offsetTop - window.innerHeight;

    if (window.scrollY > sectionTop && !started) {
      animateCounters();
      started = true;
    }

    fadeInBoxes();
  });
});

function revealTimeline() {
  const steps = document.querySelectorAll('.step');

  steps.forEach(step => {
    const position = step.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 50) {
      step.style.opacity = 1;
      step.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealTimeline);




// contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const subject = document.getElementById("subject").value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        subject: subject
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Data sent successfully:", result);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
 

