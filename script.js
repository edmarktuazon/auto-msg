document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    {
      buttonId: "reviewBtn",
      containerId: "reviewComment",
      message: `Hi, \n\nThe Templates are ready for review. Attached is the version 1 of the proof file:\n\nPlease let me know if you have any requests or need content adjustments.\n\nThanks,\nEd`,
    },
    {
      buttonId: "templateIDBtn",
      containerId: "templateIDComment",
      message: `Hi, \n\nThe Template ID(s) are now accessible, and everything is ready for testing.\n\nI've attached the final version of the file for your reference:\n\nPlease let me know if you have any requests or need content adjustments.\n\nThanks,\nEd`,
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
      randomButton.style.display = "inline-block";
      // randomButton.classList.add("random-button");
    };


    const generateRandomButton = () => {
      // generate random comments 
      const randomCommentVal = "Text"

      const randomComment = document.querySelector("#randomComment");
      const randomCommentEl = document.createElement("p");
      
      randomCommentEl.innerHTML = randomCommentVal;
      // localStorage.setItem(section.message, "Test");


      // if(section.message === true){
      //   console.log("true");
      // }

      // for(let i = 0; i > 1; i++) {
      //   if(section.message = 1) {
      //     console.log(true, "Comment has been created");
      //     // randomComment.appendChild(randomCommentEl);
      //     console.log(section.message);
      //   }else {
      //     console.log(false, "Comment has not been created");
      //     console.log(section.message);

      //   }
      // }
      
      // randomComment.appendChild(randomCommentEl);

    }
         

    const copyMessage = () => {
      navigator.clipboard.writeText(section.message);
    };

    button.addEventListener("click", generateMessage);
    copyButton.addEventListener("click", copyMessage);
    // randomButton.addEventListener("click",  generateRandomButton);
  });
});
