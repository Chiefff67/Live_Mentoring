const header = document.getElementById("page-header");
const footer = document.getElementById("page-footer");
const h2Elements = document.querySelectorAll("h2");


document
  .getElementById("skill-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const selectedSkill = document.getElementById("skill").value;
    const name = document.getElementById("name").value;

    if (selectedSkill === "HTML") {
      
      header.style.backgroundColor = "#dc3545"; 
      footer.style.backgroundColor = "#dc3545";
      h2Elements.forEach((h2) => (h2.style.color = "#dc3545"));
    } else if (selectedSkill === "CSS") {
      
      header.style.backgroundColor = "#007bff";
      footer.style.backgroundColor = "#007bff";
      h2Elements.forEach((h2) => (h2.style.color = "#007bff"));
    } else if (selectedSkill === "JavaScript") {
     
      header.style.backgroundColor = "#ffc107"; 
      footer.style.backgroundColor = "#ffc107";
      h2Elements.forEach((h2) => (h2.style.color = "#ffc107"));
    }

   
    document.getElementById(
      "greeting"
    ).textContent = `Hello, ${name}! You've selected ${selectedSkill}.`;
  });
