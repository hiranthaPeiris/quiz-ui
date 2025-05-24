import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

function QuestionCard({ question, selectedOption, showAnswer, onOptionClick, onNext, progress }) {

  useEffect(() => {
    if (showAnswer) {
      const timer = setTimeout(onNext, 1500); // Auto next after 1.5 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showAnswer, onNext]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden">
      {/* Progress Bar inside the card */}
      <ProgressBar progress={progress} />

      <img src={question.image} alt="Question" className="rounded-xl mb-4 mt-6" />
      <h2 className="text-xl font-bold mb-4">{question.text}</h2>
      <div className="flex flex-col gap-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onOptionClick(option)}
            className={`py-2 px-4 rounded-lg border 
              ${showAnswer 
                ? option === question.correctAnswer
                  ? "bg-green-400 text-white"
                  : option === selectedOption
                    ? "bg-red-400 text-white"
                    : "bg-white" 
                : "hover:bg-gray-200 bg-white"
              }`}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
