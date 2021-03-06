// Sticky navigation

const sectionIntroEl = document.querySelector(".intro");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionIntroEl);
/* HELPER FUNCTIONS */

// Scrolling

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
  const entryContainer = document.createElement("li");
  entryContainer.className = "question-container";

  entryContainer.append(entryQuestion);
  entryContainer.append(entryAnswer);

  return entryContainer;
};

const getFaqListContainer = () => {
  // Create pseudocontainer,
  // that does not exist in DOM yet for more performant entry append after we have generated all necessary HTML
  const container = document.createElement("ul");
  container.className = "accordion-list";
  return container;
};

const getEntryAnswer = (answer) => {
  const answerElement = document.createElement("div");
  answerElement.className = "answer answer-hidden";
  answerElement.innerHTML = answer;

  return answerElement;
};

const getEntryQuestion = (question) => {
  const questionElement = document.createElement("button");
  questionElement.className = "question chevron right question-interactive";
  questionElement.innerHTML = question;

  return questionElement;
};
// BUTTO SHOW and HIDE answers
// const button = document.getElementsByClassName("question-container");

function BtnShow() {
  // get all the answer elements (div.answer)
  let answers = document.getElementsByClassName("answer");
  // interate through list of elements
  for (let index = 0; index < answers.length; index++) {
    // get element by index
    let answerElement = answers[index];
    // show element by removing the class that hides it
    answerElement.classList.remove("answer-hidden");
  }
}
function BtnClose() {
  let answerhidden = document.getElementsByClassName("answer");
  for (let index = 0; index < answerhidden.length; index++) {
    let answerhiddenElement = answerhidden[index];
    answerhiddenElement.classList.add("answer-hidden");
  }
}
/* END HELPER FUNCTIONS */

///// SEARCH INPUT ////
function myFunction() {
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("accordion-list");
  li = ul[0].getElementsByClassName("question-container");
  for (i = 0; i < li.length; i++) {
    let button = li[i].getElementsByTagName("button")[0];
    txtValue = button.textContent || button.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// clear button
window.addEventListener("load", () => {
  const button = document.querySelector("#clear");
  button.addEventListener("click", () => {
    document.querySelector("#search-input").value = "";
  });
});

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
      answer: `You can do this right here ????
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
