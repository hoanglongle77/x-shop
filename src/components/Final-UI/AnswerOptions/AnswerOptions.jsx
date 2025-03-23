"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "@/redux/questionSlice/questionSlice";
import DragAndDropOptions from "../DragAndDropOptionsư/DragAndDropOptions";
import { QuestionType, renderTextWithDropdowns } from "@/constant/questionType";

const AnswerOptions = ({ question }) => {
  // const dispatch = useDispatch();
  // const selectedAnswer = useSelector(
  //   (state) => state.questions.answers[question.id]
  // );

  // const handleAnswerChange = (answer) => {
  //   dispatch(selectAnswer({ questionId: question.id, answer }));
  // };

  switch (question.Type) {
    case QuestionType.MultipleChoice:
      return <h1>Type Multiple Choice</h1>;
    case QuestionType.DropdownList:
      return <div>{renderTextWithDropdowns(question?.Content)}</div>;
    case QuestionType.Ordering:
      return <h1>Type Ordering</h1>;
    case QuestionType.Matching:
      return (
        <div>
          <p>{question.Content}</p>
        </div>
      );
    default:
      return null;
  }
};

export default AnswerOptions;
