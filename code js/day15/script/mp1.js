
    function validateForm(name, email) {
      if (!name) throw { field: "name", message: "Name is required" };
      if (!email) throw { field: "email", message: "Email is required" };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw { field: "email", message: "Invalid email format" };
      }
    }

    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();

      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      try {
        validateForm(name, email);
        alert("Registration successful!");
      
      } catch (err) {
        if (err.field) {
          document.getElementById(err.field + "Error").textContent = err.message;
        } else {
          console.error("Unknown error:", err);
        }
      }
    });