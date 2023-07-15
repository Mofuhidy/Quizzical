import './App.css';
import blobs from './assets/images/blobs.svg';
import yellow from './assets/images/yellow-blobs.svg';

function App() {
  return (
    <>
      <main>
        <img className="shapeUp" src={yellow} alt="shape up" />
        <img className="shapeBottom" src={blobs} alt="shape bottom" />

        <section className=" flex justify-center items-center flex-col h-screen gap-4">
          <h1 className="title font-bold text-violet-950 text-6xl"> Quizzical</h1>
          <p className="description text-violet-950 text-lg"> Unlock the power of your curiosity</p>
          <button type="button" className="shadow-s text-lg bg-violet-950 text-white font-bold p-4 w-9 rounded-xl">Start Quiz</button>
        </section>

      </main>
    </>
  );
}

export default App;
