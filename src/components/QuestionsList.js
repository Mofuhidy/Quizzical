import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Question from './Question';
import getQuestions from '../api/getQuestions';

function QuestionsList() {
  const [count, setCount] = useState(0);
  // const [checked, setChecked] = useState(false);
  // const [correct, setCorrect] = useState(0);
  const [questions, setQuestion] = useState([]);

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
        setQuestion(q);
      });
    };
    fetchData();
  }, [count]);

  const questionElem = questions ? questions.map((question) => (
    <Question
      key={question.id}
      q={question}
      id={question.id}
    />
  )) : [];

  return (
    <div>{questionElem}</div>
  );
}
export default QuestionsList;
