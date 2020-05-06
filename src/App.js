import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
export const myQuestions = [
  {
    question: "1 + 2 is ?",
    answers: ["1", "2", "3"],
    correctAnswer: 2
  },
  {
    question: "What is the best site for Web Programmer ?",
    answers: ["Stack Overflow", "Quora", "w3school"],
    correctAnswer: 0
  },
  {
    question: "Who is Prime minister fo Thailand ?",
    answers: [
      "Prayut Chan-o-cha",
      "Yingluck Shinawatra",
      "Abhisit Vejjajiva",
      "Somchai Wongsawat"
    ],
    correctAnswer: 0
  }
];
class App extends Component {

  constructor() {
    super();
    this.state = { 
      answers: [],
      message: 'กรุณาเลือกคำตอบที่ถูกต้อง'
    };
    this.onInput = this.onInput.bind(this);
    this.buildRadioButtons = this.buildRadioButtons.bind(this);
  }
  render() {
    return (
      <div id="question-section">
        <h1>{this.state.message}</h1>
        {
          myQuestions.map((data, i) => {
            const { question, answers, correctAnswer,} = data;
            return (
              <div key={i}>
                <h3>{question}</h3>
                {this.buildRadioButtons(answers, correctAnswer, question)}
              </div>
            );
          })
        }
        <button onClick={this.checkAnswer}>ตรวจคำตอบ</button>
      </div>
    );
  }

  buildRadioButtons = (arr, type, id) => {
      return arr.map((choice, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              name={id}
              value={i}
              onChange={this.onInput}
            />
            <label>{choice}</label>
          </div>
        )
      })
    }
  
  onInput = (e) => {
    const id = e.target.name;
    const answer = { id, answer: e.target.value };
    let answers;
    (this.state.answers.some(answer => answer.id === id))?
    answers = [...this.state.answers.filter(answer => answer.id !== id), answer]:answers = [...this.state.answers, answer];
    this.setState({ answers });
  }

  checkUserAnswerAllQuestion =()=> {

  }
  
  checkAnswer =(e)=> {
    e.preventDefault();
    myQuestions.forEach((element,i) => {
      if(this.state.answers[i].answer.toString() === element.correctAnswer.toString()) {
        this.setState({ message: 'All of the above'})
      }else {
        this.setState({ message: 'Have a mistake'})
      }
    });
  }

}

export default App;
