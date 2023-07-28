import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Question({ q, handleClickAnswer, id }) {
  const { answers } = q;

  const handleClick = (answer) => {
    handleClickAnswer(id, answer);
  };

  const answersElements = answers.map((answer) => {
    let id = null;
    if (q.checked) {
      if (q.correct === answer) {
        id = 'correct';
      } else if (q.selected === answer) {
        id = 'incorrect';
      }
    }
    return (
      <button key={nanoid()} id={id} className={q.selected === answer ? 'answer selected' : 'answer'} type="button" onClick={() => handleClick(answer)}>
        {answer}
      </button>
    );
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center font-bold text-lg sm:text-2xl text-violet-950">
        {q.question}
        <div className="flex font-normal justify-between w-48 items-center">
          {answersElements}
        </div>
        <div className="line" />
      </div>
    </>
  );
}

Question.propTypes = {
  q: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    question: PropTypes.string,
    correct: PropTypes.string,
    selected: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Question;
