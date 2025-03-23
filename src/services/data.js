const questionsData = [
  {
    id: "part1",
    title: "Part 1: Multiple Choice & Dropdown",
    questions: [
      {
        id: "q1",
        text: "What is the capital of France?",
        type: "multiple-choice",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
      },
      {
        id: "q2",
        text: "Select the largest planet in our solar system.",
        type: "dropdown_list",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
      },
    ],
  },
  {
    id: "part2",
    title: "Part 2: Input & Textarea",
    questions: [
      {
        id: "q3",
        text: "Enter a synonym for 'Happy':",
        type: "writing",
      },
      {
        id: "q4",
        text: "Describe your favorite hobby (max 100 words):",
        type: "writing",
      },
    ],
  },
  {
    id: "part3",
    title: "Part 3: Drag and Drop",
    questions: [
      {
        id: "q5",
        text: "Arrange the colors of the rainbow in order:",
        type: "ordering",
        options: [
          "Red",
          "Orange",
          "Yellow",
          "Green",
          "Blue",
          "Indigo",
          "Violet",
        ],
      },
    ],
  },
];

export default questionsData;
