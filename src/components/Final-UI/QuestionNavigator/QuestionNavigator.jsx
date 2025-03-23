import React from "react";

const QuestionNavigator = ({
  totalQuestions,
  currentQuestionIndex,
  flaggedQuestions,
  onNavigate,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Question Navigation</h3>
      <div className="flex gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isActive = index === currentQuestionIndex;
          const isFlagged = flaggedQuestions.includes(index);

          return (
            <button
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-md border
                ${
                  isActive
                    ? "bg-blue-200 text-blue-800 font-bold"
                    : "bg-gray-100 text-gray-600"
                }
                ${isActive ? "border-blue-500" : "border-gray-300"}
              `}
              onClick={() => onNavigate(index)}
            >
              {index + 1}
              {isFlagged && <span className="text-red-500 ml-1">⭐</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionNavigator;
