"use client";

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AnswerOptions from "../AnswerOptions/AnswerOptions";
import { useQuestionsQuery } from "@/hooks/useQuestionsQuery";
import QuestionNavigator from "../QuestionNavigator/QuestionNavigator";

const QuestionList = () => {
  const { data: exams, isLoading, error } = useQuestionsQuery();
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState([]); // Store flagged questions

  if (isLoading)
    return (
      <div className="part-section mb-6 bg-white rounded-2xl h-fit lg:p-[30px] lg:w-3xl flex items-center justify-center">
        <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <div className="part-section mb-6 bg-white rounded-2xl h-fit lg:p-[30px] lg:w-3xl">
        Error
      </div>
    );
  if (!exams || !exams.Parts || exams.Parts.length === 0)
    return (
      <div className="part-section mb-6 bg-white rounded-2xl h-fit lg:p-[30px] lg:w-3xl">
        No exams available.
      </div>
    );

  const currentPart = exams.Parts[currentPartIndex] || { Questions: [] };
  const currentQuestion = currentPart.Questions[currentQuestionIndex] || {};

  const totalQuestions = exams.Parts.reduce(
    (sum, part) => sum + (part.Questions ? part.Questions.length : 0),
    0
  );

  const isLastQuestion =
    currentPartIndex === exams.Parts.length - 1 &&
    currentQuestionIndex === currentPart.Questions.length - 1;

  const handleNavigate = (index) => {
    let questionCount = 0;
    for (let i = 0; i < exams.Parts.length; i++) {
      if (index < questionCount + exams.Parts[i].Questions.length) {
        setCurrentPartIndex(i);
        setCurrentQuestionIndex(index - questionCount);
        return;
      }
      questionCount += exams.Parts[i].Questions.length;
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      if (currentQuestionIndex < currentPart.Questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if (currentPartIndex < exams.Parts.length - 1) {
        setCurrentPartIndex(currentPartIndex + 1);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentPartIndex > 0) {
      const prevPartIndex = currentPartIndex - 1;
      setCurrentPartIndex(prevPartIndex);
      setCurrentQuestionIndex(exams.Parts[prevPartIndex].Questions.length - 1);
    }
  };

  const handleSubmit = () => {
    alert("Exam Submitted! 🎉"); // Replace this with actual submit logic
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="question-list">
        <div className="part-section mb-6 bg-white rounded-2xl h-fit lg:p-[30px] lg:w-3xl">
          <h6 className="text-lg font-bold mb-2">{currentPart.Content}</h6>
          <div className="mb-4">
            <AnswerOptions question={currentQuestion} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPartIndex === 0 && currentQuestionIndex === 0}
            className="bg-white text-blue-500 p-2 h-[48px] w-[114px] rounded-4xl"
          >
            Previous
          </button>
          {isLastQuestion ? (
            <button
              className="bg-green-500 text-white p-2 h-[48px] w-[114px] rounded-4xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white p-2 h-[48px] w-[114px] rounded-4xl"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>

        {/* Question Navigator */}
        <QuestionNavigator
          totalQuestions={totalQuestions}
          currentQuestionIndex={currentQuestionIndex}
          flaggedQuestions={flaggedQuestions}
          onNavigate={handleNavigate}
        />
      </div>
    </DndProvider>
  );
};

export default QuestionList;
