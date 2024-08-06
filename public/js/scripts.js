const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal1");
  var form = modal.querySelector("form");
  var submitButton = document.getElementById("formSubmit");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Get form values
    var firstName = form.querySelector('input[name="first_name"]').value;
    var lastName = form.querySelector('input[name="last_name"]').value;
    var password = form.querySelector('input[name="password"]').value;
    var email = form.querySelector('input[name="email"]').value;

    var data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    };

    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        var instance = M.Modal.getInstance(modal);
        instance.close();

        M.toast({ html: "Form submitted successfully!" });
      })
      .catch((error) => {
        console.error("Error:", error);

        M.toast({ html: "An error occurred. Please try again." });
      });
  });
});

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend = `
      <div class="col s12 m6 l4">
        <div class="card medium scale-transition scale-in">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });

  getProjects();
  $(".modal").modal();
});
