import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { reorderAnswer } from "@/redux/questionSlice/questionSlice";

const DragAndDropOptions = ({ question }) => {
  const dispatch = useDispatch();
  const selectedOrder =
    useSelector((state) => state.questions.answers[question.id]) ||
    question.options;

  // Function to reorder items when dropped
  const moveOption = (dragIndex, hoverIndex) => {
    const updatedOrder = [...selectedOrder];
    const [movedItem] = updatedOrder.splice(dragIndex, 1);
    updatedOrder.splice(hoverIndex, 0, movedItem);

    dispatch(
      reorderAnswer({ questionId: question.id, newOrder: updatedOrder })
    );
  };

  return (
    <div className="p-4 border rounded bg-gray-100 min-h-[150px]">
      <p className="mb-2">Drag to reorder:</p>
      {selectedOrder.map((option, index) => (
        <DraggableOption
          key={option}
          option={option}
          index={index}
          moveOption={moveOption}
        />
      ))}
    </div>
  );
};

const DraggableOption = ({ option, index, moveOption }) => {
  const [, ref] = useDrag({
    type: "option",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "option",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveOption(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="p-2 bg-white border rounded cursor-pointer mb-1"
    >
      {option}
    </div>
  );
};

export default DragAndDropOptions;
