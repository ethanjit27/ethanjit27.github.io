function clearPlaceholder() {
    var inputElement = document.getElementById("myInput");
    if (inputElement.value === inputElement.placeholder) {
      inputElement.value = "";
    }
  }

  function restorePlaceholder() {
    var inputElement = document.getElementById("myInput");
    if (inputElement.value === "") {
      inputElement.value = inputElement.placeholder;
    }
  }

  document.getElementById("myForm").addEventListener("reset", function () {
    setTimeout(function () {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    }, 0);
  });