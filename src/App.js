import { useState } from 'react';
import './App.css';
import QuestionsList from './components/QuestionsList';
import blobs from './assets/images/blobs.svg';
import yellow from './assets/images/yellow-blobs.svg';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartQuiz = () => {
    setGameStarted(true);
  };

  return (
    <>
      <main>
        <img className="shapeUp" src={yellow} alt="shape up" />
        <img className="shapeBottom" src={blobs} alt="shape bottom" />

        {
          !gameStarted
            ? (
              <section className=" flex justify-center items-center flex-col h-screen gap-4">
                <h1 className="title font-bold text-violet-950 text-6xl"> Quizzical</h1>
                <p className="description text-violet-950 text-lg"> Unlock the power of your curiosity</p>
                <button type="button" className="shadow-s text-lg bg-violet-950 text-white font-bold p-4 w-48 rounded-xl" onClick={handleStartQuiz}>Start Quiz</button>
              </section>
            )
            : <QuestionsList />
        }

        <footer className="fixed bottom-0 text-center h-12 flex justify-center items-center w-full">
          Developed by
          <a href="https://github.com/Mofuhidy" className=" font-semibold text-violet-950  pl-2 "> Fuhidy </a>
        </footer>
      </main>
    </>
  );
}

export default App;
