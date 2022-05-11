const faqList = () => {
  const faqData = [
    {
      question: "How pop-up moves?",
      answer:
        "Movables have mechanisms such as flaps, pull tabs, and wheels (volvelles) that cause movement on the page surface. Pop-ups employ various folding devices that cause figures to lift, pop up, rise and unfold, or unfold and extend when a page is opened.",
    },
    {
      question: "Who invented the pop-up book?",
      answer:
        "It was invented by Ramon Llull (ca. 1232-1315), a writer, theologian, and mathematician, who later became a martyr in the Roman Catholic Church. Called a Lullian Circle, the device was composed of several revolving, affixed circles each annotating an ideal",
    },
    {
      question: "How pop-ups are made?",
      answer:
        "Movable books are still hand-assembled, and publishers and packagers continually seek the least costly labor forces, now primarily in Asia.",
    },
    {
      question: "What kind of Pop-up elements there are?",
      answer: "Different types:",
    },
    {
      question: "Lorem ipsum ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, assumenda. Natus autem totam dolor iusto facilis provident tempora sint nemo, officia, illum, saepe omnis. Impedit nesciunt harum quibusdam quisquam maiores!",
    },
    {
      question: "How to learn more with Popuplady",
      answer: `You can do this right here 👉
  <a class="button" href="https://popuplady.com/" target="_blank">
    Popuplady
  </a>`,
    },
  ];

  const faqElement = document.getElementById("faq");
  // faqElement.innerHTML = "";
  const faqContainer = document.createElement("div"); //element definition
  faqContainer.id = "faq-container"; //element definition

  const visible = "answer-visible";
  const hidden = "answer-hidden";

  const handleQuestionClick = (entryAnswer) => {
    const isVisible = entryAnswer.className.includes(visible);

    if (isVisible) {
      entryAnswer.className = `answer ${hidden}`;
    }
    // if NOT isVisible
    // Show the answer
    if (!isVisible) {
      entryAnswer.className = `answer ${visible}`;
    }
  }; //the click

  faqData.forEach((faqEntry) => {
    const { question, answer } = faqEntry; //loop starts her

    const entryContainer = document.createElement("div");
    entryContainer.className = "question-container";

    const entryAnswer = document.createElement("div");
    entryAnswer.className = "answer answer-hidden";
    entryAnswer.innerHTML = answer;

    const entryQuestion = document.createElement("div");
    entryQuestion.className = "question";
    entryQuestion.innerHTML = question;
    entryQuestion.onclick = () => {
      handleQuestionClick(entryAnswer);
    };

    entryContainer.append(entryQuestion);
    entryContainer.append(entryAnswer);

    faqContainer.append(entryContainer);
  });
  faqElement.append(faqContainer);
};
faqList();
