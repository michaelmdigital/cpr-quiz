import React, { useState } from 'react';
import End from './End'

const Quiz = () => {
  const questions = [
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/When-performing-CPR-on-an-adult-where-should-you-position-your-hands-for-chest-compressions-1.jpg',
      question: 'When performing CPR on an adult, where should you position your hands for chest compressions?',
      options: ['On the upper abdomen', 'On the lower ribcage', 'In the center of the chest', ' On the neck'],
      answer: 'In the center of the chest'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2019/04/CPR-classes-san-diego-CPR-chicks-.jpg',
      question: 'Which action should you take first when you witness an unresponsive child collapse?',
      options: ['Start rescue breaths', 'Check for a pulse', 'Activate the emergency response system', 'Begin chest compressions immediately'],
      answer: 'Activate the emergency response system'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/When-performing-CPR-on-a-senior-what-is-the-recommended-depth-for-chest-compressions.jpg',
      question: 'When performing CPR on a senior, what is the recommended depth for chest compressions?',
      options: [' 1-2 inches (2.5-5 cm)', '2-3 inches (5-7.5 cm)', '3-4 inches (7.5-10 cm)', '4-5 inches (10-12.5 cm)'],
      answer: '1-2 inches (2.5-5 cm)'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/In-child-CPR-how-many-chest-compressions-should-you-deliver-per-minute.jpg',
      question: 'In child CPR, how many chest compressions should you deliver per minute?',
      options: ['80-90 compressions', '100-120 compressions', '140-160 compressions', '180-200 compressions'],
      answer: '100-120 compressions'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/If-an-adult-is-choking-and-becomes-unresponsive-what-should-you-do-next.jpg',
      question: 'If an adult is choking and becomes unresponsive, what should you do next?',
      options: ['Perform back blows', 'Begin CPR', 'Open the airway and look for any obstructions', 'Activate the emergency response system'],
      answer: 'Activate the emergency response system'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/Which-technique-should-you-use-to-clear-a-foreign-object-from-the-airway-of-a-responsive-choking-adult.jpg',
      question: 'Which technique should you use to clear a foreign object from the airway of a responsive choking adult?',
      options: [' Chest compressions', 'Heimlich maneuver', 'Rescue breaths', 'Finger sweep'],
      answer: 'Heimlich maneuver'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/When-giving-rescue-breaths-to-an-infant-how-should-you-position-the-head-and-neck.jpg',
      question: 'When giving rescue breaths to an infant, how should you position the head and neck?',
      options: ['Tilt the head back and lift the chin', 'Keep the head and neck in a neutral position', 'Tilt the head forward and lower the chin', 'Rotate the head to the side'],
      answer: 'Tilt the head back and lift the chin'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/During-CPR-how-often-should-you-reassess-the-victims-pulse-and-breathing.jpg',
      question: 'During CPR, how often should you reassess the victim\'s pulse and breathing?',
      options: ['Every 1 minute', 'Every 2 minutes', 'Every 3 minutes', 'Every 5 minutes'],
      answer: 'Every 2 minutes'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/What-is-the-correct-ratio-of-chest-compressions-to-rescue-breaths-when-performing-CPR-on-an-adult.jpg',
      question: 'What is the correct ratio of chest compressions to rescue breaths when performing CPR on an adult?',
      options: ['10 compressions to 1 breath', '15 compressions to 2 breaths', '30 compressions to 2 breaths', '30 compressions to 1 breath'],
      answer: '30 compressions to 2 breaths'
    },
    {
      image: 'https://cprchicks.com/wp-content/uploads/2023/06/When-providing-CPR-to-a-child-what-is-the-recommended-compression-depth.jpg',
      question: 'When providing CPR to a child, what is the recommended compression depth?',
      options: ['1-2 inches (2.5-5 cm)', '2-3 inches (5-7.5 cm)', '3-4 inches (7.5-10 cm)', '4-5 inches (10-12.5 cm)'],
      answer: '1-2 inches (2.5-5 cm)'
    }
  ];

  
  // useState 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score">
          <h1>Your score: {score} out of {questions.length}</h1>
          <h2>🎉 Great job! No matter your score, you just took the first step to becoming a life-saver, but there is only so much you can learn about CPR online.</h2>
    <p>In-person CPR classes are essential as they offer hands-on practice, immediate feedback, and the opportunity to develop critical skills and confidence necessary for effective CPR in real emergencies.</p>
    <h2>Call Deb to Book your CPR Class Today!</h2>
    <div>
        <button>(619) 942-2000</button>
      </div>
    <br></br>  
    {/* <img src="https://cprchicks.com/wp-content/uploads/2019/04/CPR-classes-san-diego-CPR-chicks-.jpg" alt=""/> */}
    <iframe
        width="460"
        height="259"
        src="https://www.youtube.com/embed/nASXPZ8lstk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    <br></br>  
    <br></br> 
    <p><a href="https://cprchicks.com/">Return to cprchicks.com</a></p>

        </div>
      ) : (
        <div className="question-container">
          <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
          </div>
          <br></br>
          <div className="image">
            <img src={questions[currentQuestion].image} alt="Question" />
        </div>
        <br></br>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <br></br>
          <button
            className="next-button"
            disabled={!selectedOption}
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
