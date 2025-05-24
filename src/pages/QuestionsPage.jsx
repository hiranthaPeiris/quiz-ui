
import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar"; // Assuming you still want to use this inside QuestionsPage

function QuestionsPage({ questions, onExitPaper }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const totalQuestions = questions.length;
  const question = questions[currentQuestion];

  useEffect(() => {
    if (totalQuestions > 0) {
      setProgress(((currentQuestion) / totalQuestions) * 100);
    } else {
      setProgress(0);
    }
  }, [currentQuestion, totalQuestions]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (question && option === question.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowAnswer(true);

    setTimeout(() => {
      setSelectedOption(null);
      setShowAnswer(false);
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {quizCompleted ? (
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl">Your Score: {score} out of {totalQuestions}</p>
          <button
            onClick={onExitPaper}
            className="mt-6 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
          >
            Exit Paper
          </button>
        </div>
      ) : (
        <>
          {/* You can potentially move the ProgressBar here if you want it outside the QuestionCard */}
          {/* <ProgressBar progress={progress} /> */}
          {question ? (
            <QuestionCard
              question={question}
              selectedOption={selectedOption}
              showAnswer={showAnswer}
              onOptionClick={handleOptionClick}
              progress={progress} // Passing progress down, assuming QuestionCard still uses it
            />
          ) : (
            <p>Loading question...</p> // Or some other loading indicator
          )}
          <button
            onClick={onExitPaper}
            className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Exit Paper
          </button>
        </>
      )}
    </div>
  );
}

export default QuestionsPage;