"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "@/redux/questionSlice/questionSlice";
import DragAndDropOptions from "../DragAndDropOptionsư/DragAndDropOptions";
import { QuestionType } from "@/constant/questionType";
import MatchingList from "../TestType/MatchingList";
import DDList from "../TestType/DDList";
import OrderList from "../TestType/OrderList";

const AnswerOptions = ({ question }) => {
  // const dispatch = useDispatch();
  // const selectedAnswer = useSelector(
  //   (state) => state.questions.answers[question.id]
  // );

  // const handleAnswerChange = (answer) => {
  //   dispatch(selectAnswer({ questionId: question.id, answer }));
  // };

  switch (question.Type) {
    case QuestionType.DropdownList:
      return <DDList dataSource={question} />;
    case QuestionType.Ordering:
      return <OrderList dataSource={question} />;
    case QuestionType.Matching:
      return <MatchingList dataSource={question} />;
    default:
      return null;
  }
};

export default AnswerOptions;
