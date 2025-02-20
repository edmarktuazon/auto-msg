document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    {
      buttonId: "reviewBtn",
      containerId: "reviewComment",
      message: `Hi, \n\nThe Templates are ready for review. Attached is the version 1 of the proof file:\n\nPlease let me know if you have any requests or need content adjustments.\n\nThanks!`,
    },
    {
      buttonId: "templateIDBtn",
      containerId: "templateIDComment",
      message: `Hi, \n\nThe Template IDs are now accessible, and everything is ready for testing.\n\nI've attached the final version of the file for your reference:\n\nPlease let me know if you have any requests or need content adjustments.\n\nThanks!`,
    },
  ];



  sections.forEach((section) => {
    const button = document.querySelector(`#${section.buttonId}`);
    const container = document.querySelector(`#${section.containerId}`);
    const textarea = document.createElement("textarea");
    const copyButton = document.createElement("button");
    // const randomButton = document.createElement("button");
    copyButton.textContent = "Copy text";
    copyButton.style.display = "none";

    // randomButton.textContent = "Random comment";
    // randomButton.style.display = "none";
    textarea.style.display = "none";

    container.appendChild(textarea);
    container.appendChild(copyButton);
    // container.appendChild(randomButton);

  const generateMessage = () => {
      textarea.value = section.message;
      textarea.style.display = "block";
      textarea.classList.add("review-area");
      copyButton.style.display = "inline-block";
      copyButton.classList.add("copy-button");
      // randomButton.style.display = "inline-block";
      // randomButton.classList.add("random-button");
    };



  //   const generateRandomButton = () => {

  //     if(!section.message){
  //       true;
  //     }else{
  //       textarea.value = ""
  //     }
  //     console.log(textarea.value, "Removed comment");

  //     const randomComment = [
  //       {
  //         message: `Comment 1`,
  //       },
  //       {
  //         message: `Comment 2`,
  //       },
  //     ];

  //     if(generateRandomButton === true){
  //     textarea.value = randomComment[0].message;
  //   }else if(generateRandomButton === true ){
  //     textarea.value = randomComment[1].message;

  //   }else{
  //     undefined;
  //   }
  // }
        
    const copyMessage = () => {
      swal.fire({
        icon: "success",
        text: "Copied to clipboard"
      }, 
       navigator.clipboard.writeText(section.message));
       textarea.style.border = "solid 3px #05ad4b";

    };

    button.addEventListener("click", generateMessage);
    copyButton.addEventListener("click", copyMessage);
    // randomButton.addEventListener("click",  generateRandomButton);
  });
});
