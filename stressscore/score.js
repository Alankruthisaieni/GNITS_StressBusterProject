function submitForm(e) {
  e.preventDefault();
  location.href = "quiz.html";
}
let questions = [
  {
    id: 1,
    question: "In the last month, how often have you been upset because of something that happened unexpectedly?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 2,
    question: "In the last month, how often have you felt that you were unable to control the important things in your life?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 3,
    question: "In the last month, how often have you felt nervous and stressed?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 4,
    question: "In the last month, how often have you felt confident about your ability to handle your personal problems?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 5,
    question: "In the last month, how often have you felt that things were going your way?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 6,
    question: "In the last month, how often have you found that you could not cope with all the things that you had to do?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 7,
    question: "In the last month, how often have you been able to control irritations in your life?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 8,
    question: "In the last month, how often have you felt that you were on top of things?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 9,
    question: "In the last month, how often have you been angered because of things that happened that were outside of your control?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
  {
    id: 10,
    question: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
    options: [
      "Never", "Almost never", "Sometimes", "Fairly Often", "Very Often"
    ]
  },
]

let question_count = 0;
let point = 0;
window.onload = function () {
  show(question_count);
};

function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;
  // console.log(user_answer);
  if (question_count == 3 || question_count == 4 || question_count == 6 || question_count == 7) {
    if (user_answer == questions[question_count].options[0]) {
      point += 4;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[1]) {
      point += 3;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[2]) {
      point += 2;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[3]) {
      point += 1;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[4]) {
      point += 0;
      sessionStorage.setItem("points", point);
    }
  }
  else {
    if (user_answer == questions[question_count].options[0]) {
      point += 0;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[1]) {
      point += 1;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[2]) {
      point += 2;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[3]) {
      point += 3;
      sessionStorage.setItem("points", point);
    }
    else if (user_answer == questions[question_count].options[4]) {
      point += 4;
      sessionStorage.setItem("points", point);
    }
  }

  if (question_count == questions.length - 1) {
    location.href = "end.html";
    return;
  }
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  question.innerHTML = `
    <h2><span style="color:red;">*</span>Q${questions[count].id}: ${questions[count].question}</h2> 
    <ul class="option_group" > 
      <li class="option ">${questions[count].options[0]}</li> 
      <li class="option">${questions[count].options[1]}</li> 
      <li class="option">${questions[count].options[2]}</li> 
      <li class="option">${questions[count].options[3]}</li> 
      <li class="option">${questions[count].options[4]}</li>
    </ul>`
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}
