document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    {
      buttonId: "reviewBtn",
      containerId: "reviewComment",
      message: `Hi ,\n\nThe emails are ready for your review. Attached is v1 of the proof file:\n\nPlease let me know if you have any feedback or require any further adjustments. \n\nThanks,\nEd`,
    },
    {
      buttonId: "templateIDBtn",
      containerId: "templateIDComment",
      message: `Hi ,\n\nTemplate ID details are included, and It's ready for testing,\n\nFinal version of the file is ready:\n\nThanks,\nEd`,
    },
  ];

  sections.forEach((section) => {
    const button = document.querySelector(`#${section.buttonId}`);
    const container = document.querySelector(`#${section.containerId}`);

    const textarea = document.createElement("textarea");
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy text";
    copyButton.style.display = "none";
    textarea.style.display = "none";

    container.appendChild(textarea);
    container.appendChild(copyButton);

    const generateMessage = () => {
      textarea.value = section.message;
      textarea.style.display = "block";
      textarea.classList.add("review-area");
      copyButton.style.display = "inline-block";
      copyButton.classList.add("copy-button");
    };

    const copyMessage = () => {
      navigator.clipboard.writeText(section.message);
    };

    button.addEventListener("click", generateMessage);
    copyButton.addEventListener("click", copyMessage);
  });
});
