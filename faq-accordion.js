// The onClick Event - open Get the button, and when the user clicks on it, execute myFunction
// const button = document.querySelector("#BtnShow");
// const div = document.querySelector("#faq");
// // faqList.style.display = "none";
// button.onclick = () => {
//   faq.style.display = "block";
// };
// const content = document.getElementById("faq");
// const button = document.getElementById("BtnShow");
// const entryAnswer = getEntryAnswer(answer);
// button.onclick = function () {
//   content.className = "open";
//   button.getEntryAnswer = "answer";
// };
// document.getElementById("myBtn").onclick = function () {
//   myFunction();
// };
// function myFunction() {
//   document.getElementById("faq").classList.toggle("answer");
// }

/* HELPER FUNCTIONS */

// Toggle CSS class to show question in HTML
const handleOpenQuestion = (entryQuestion) => {
  // Toggle off className right
  entryQuestion.classList.toggle("right");

  // Toggle on className bottom
  entryQuestion.classList.toggle("bottom");
};

const handleOpenAnswer = (entryAnswer) => {
  // Toggle off className answer-hidden
  entryAnswer.classList.toggle("answer-hidden");
};

/**
 * Find Questions in DOM
 * Toggle class names to make them closed
 */
const handleHideOtherQuestions = (currentAnswer) => {
  const answers = document.querySelectorAll("#faq .question-container");

  answers.forEach((questionContainer) => {
    const question = questionContainer.querySelector(".question");
    const answer = questionContainer.querySelector(".answer");

    // Skip if answer is the current answer
    if (currentAnswer === answer) {
      return;
    }

    // Add answer-hidden to all other answers
    question.classList.remove("bottom");
    question.classList.add("right");
    answer.classList.add("answer-hidden");
  });
};

const getAnswerContainer = (entryQuestion, entryAnswer) => {
  const entryContainer = document.createElement("div");
  entryContainer.className = "question-container";

  entryContainer.append(entryQuestion);
  entryContainer.append(entryAnswer);

  return entryContainer;
};

const getFaqListContainer = () => {
  // Create pseudocontainer,
  // that does not exist in DOM yet for more performant entry append after we have generated all necessary HTML
  return document.createElement("div");
};

const getEntryAnswer = (answer) => {
  const answerElement = document.createElement("div");
  answerElement.className = "answer answer-hidden";
  answerElement.innerHTML = answer;

  return answerElement;
};

const getEntryQuestion = (question) => {
  const questionElement = document.createElement("div");
  questionElement.className = "question chevron right question-interactive";
  questionElement.innerHTML = question;

  return questionElement;
};

/* END HELPER FUNCTIONS */

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
      answer: `Different types:,
      <ul>
      <li>Box and cylinder</li>
      <li>Carousel</li>
      <li>Dissolving images and slats</li>
      <li>Flap or lift the flap</li>
      <li>Floating layers or platforms</li>
      <li>Leporello</li>
      <li>Pull-tab</li>
      <li>Tunnel book or peep-show</li>
      <li>V-fold</li>
      <li>Volvelle or wheel</li>
      <li>Waterfall</li>
    </ul>`,
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

  const faqContainer = getFaqListContainer();

  const handleQuestionClick = (entryQuestion, entryAnswer) => {
    handleHideOtherQuestions(entryAnswer);

    handleOpenQuestion(entryQuestion);
    handleOpenAnswer(entryAnswer);
  };

  faqData.forEach((faqEntry) => {
    const { question, answer } = faqEntry;

    const entryAnswer = getEntryAnswer(answer);
    const entryQuestion = getEntryQuestion(question);

    // Add Question Click
    entryQuestion.onclick = () => {
      handleQuestionClick(entryQuestion, entryAnswer);
    };

    // Add Question and answer elements to Container
    const entryContainer = getAnswerContainer(entryQuestion, entryAnswer);

    faqContainer.append(entryContainer);
  });

  // Get the main container from DOM that we will be operating in.
  const faqElement = document.getElementById("faq");
  faqElement.innerHTML = "";

  faqElement.append(faqContainer);
};

faqList();
