import React, { useState } from 'react';
import Quiz from './Quiz';
import End from './End';

const Start = () => {
  // Declare a state variable and its initial value using useState
  const [start, setStart] = useState(true);
  const [quiz, setQuiz] = useState(false);
 
  const handleStartQuiz = () => {
    setStart(false);
    setQuiz(true);
  }

  return (
    <div>
      {start ? (
        <div>
        <h1>Are You Prepared To Save A Life?</h1>
        <p>Most people don't know how to preform effective CPR in a real emergency situation. Test your CPR knowledge today.</p>
        <img className="home-img" src="https://cprchicks.com/wp-content/uploads/2023/06/Are-you-prepared-to-save-a-life.jpg" alt=""/>
        <br></br> 
        <p>(only takes 1 - 2 minutes)</p>
        </div>
      ): null}
      
      {quiz ? (
        <Quiz />
      ) : (
        <>
          <button onClick={handleStartQuiz}>Start Quiz</button>
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default Start;
