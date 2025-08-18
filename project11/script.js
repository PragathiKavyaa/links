function filterJobs() {
  const search = document.getElementById("search").value.toLowerCase();
  const location = document.getElementById("locationFilter").value;
  const jobs = document.querySelectorAll(".job-card");

  jobs.forEach(job => {
    const jobText = job.innerText.toLowerCase();
    const locationText = job.querySelector("p:nth-child(3)").innerText;

    if ((jobText.includes(search) || search === "") &&
        (locationText.includes(location) || location === "")) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
}

function submitApplication(event) {
  event.preventDefault();
  alert("Your application has been submitted successfully!");
}

// Scroll animation
window.addEventListener("scroll", function() {
  const cards = document.querySelectorAll(".job-card");
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 50) {
      card.classList.add("show");
    }
  });
});

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert("Login successful");
  } else {
    alert("Please fill in all fields");
  }
}

function signupUser(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert("Signup successful");
}

function updateProfile(event) {
  event.preventDefault();
  alert("Profile updated successfully!");
}

function postJob(event) {
  event.preventDefault();
  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("companyName").value;
  const location = document.getElementById("jobLocation").value;
  const description = document.getElementById("jobDescription").value;

  const jobList = document.getElementById("postedJobs");
  const li = document.createElement("li");
  li.innerHTML = `<strong>${title}</strong> at ${company} (${location}) <br> ${description}`;
  jobList.appendChild(li);

  // Reset form
  document.querySelector(".post-job form").reset();
  alert("Job posted successfully!");
}

  const container = document.querySelector('.carousel-container');
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const cards = Array.from(document.querySelectorAll('.carousel-track .job-cards'));

  // Read the flex gap from CSS (fallback to 20 if not available)
  function getGap() {
    const cs = getComputedStyle(track);
    const gap = parseFloat(cs.gap || cs.columnGap || '20');
    return isNaN(gap) ? 20 : gap;
  }

  function getCardWidth() {
    // width of a single card (excluding gap)
    return cards.length ? cards[0].getBoundingClientRect().width : 0;
  }

  function getVisibleCount() {
    const gap = getGap();
    const containerW = container.getBoundingClientRect().width;
    const cardW = getCardWidth();
    if (!cardW) return 1;
    // how many full cards fit in the viewport
    return Math.max(1, Math.floor((containerW + gap) / (cardW + gap)));
  }

  let index = 0;

  function update() {
    const gap = getGap();
    const cardW = getCardWidth();
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, cards.length - visible);

    // wrap around for infinite-ish loop
    if (index > maxIndex) index = 0;
    if (index < 0) index = maxIndex;

    const offset = -(index * (cardW + gap));
    track.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index++;
    update();
  });

  prevBtn.addEventListener('click', () => {
    index--;
    update();
  });

  // Recalculate on load and on resize so it stays responsive
  window.addEventListener('load', update);
  window.addEventListener('resize', update);
  document.addEventListener('DOMContentLoaded', update);

  // Optional: click “Apply Now” goes to apply page
  function applyJob() {
    window.location.href = "apply.html";
  }
  window.applyJob = applyJob; // expose to inline onclick

  const categoryButtons = document.querySelectorAll(".category-btn");
const jobCardss = document.querySelectorAll(".job-card");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");

        jobCardss.forEach(card => {
            if (selectedCategory === "All" || card.getAttribute("data-category") === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


