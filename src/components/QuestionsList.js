import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Question from './Question';
import getQuestions from '../api/getQuestions';

function QuestionsList() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [questions, setQuestions] = useState([]);

  const shuffleArr = (arr) => arr.sort(() => Math.random - 0.5);

  useEffect(() => {
    const fetchData = async () => {
      const questionsAPI = await getQuestions();
      const q = [];
      questionsAPI.results.forEach((question) => {
        q.push({
          id: nanoid(),
          answers: shuffleArr([...question.incorrect_answers, question.correct_answer]),
          question: question.question,
          correct: question.correct_answer,
          selected: null,
          checked: false,
        });
        setQuestions(q);
      });
    };
    fetchData();
  }, [count]);

  // eslint-disable-next-line consistent-return
  function handleCheck() {
    let selected = true;

    questions.forEach((question) => {
      if (question.selected === null) {
        selected = false;
      }
    });

    if (!selected) {
      return false;
    }

    setQuestions((questions) => questions.map((question) => ({ ...question, checked: true })));

    setChecked(true);

    let correct = 0;
    questions.forEach((question) => {
      if (question.correct === question.selected) {
        correct += 1;
      }
    });
    setCorrect(correct);
  }

  const handleClickAnswer = (id, answer) => {
    setQuestions((questions) => questions.map(
      (question) => (id === question.id ? { ...question, selected: answer } : question),
    ));
  };

  const handlePlayAgain = () => {
    setCount((count) => count + 1);
    setChecked(false);
  };

  const questionElem = questions ? questions.map((question) => (
    <Question
      key={question.id}
      q={question}
      handleClickAnswer={handleClickAnswer}
      id={question.id}
    />
  )) : [];

  return (
    <>

      {questionElem}
      <div className="end-div">
        {checked && (
          <span className="score">
            You Scored
            {correct}
            /5 correct answers
          </span>
        )}
        <button type="button" className="check" onClick={checked ? handlePlayAgain : handleCheck}>
          {checked ? 'Play Again' : 'Check Answer'}
        </button>
      </div>

    </>
  );
}
export default QuestionsList;
