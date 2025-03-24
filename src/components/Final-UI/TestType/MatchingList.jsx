import { useState } from "react";

const formatTextToParagraphs = (text) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  return lines.slice(1).map((line, index) => ({
    number: index + 1,
    text: line.replace(/^Paragraph \d+ - /, ""),
  }));
};

const getFirstValue = (text) => {
  return text.split("\n")[0];
};

const MatchingList = ({ dataSource }) => {
  const paragraphs = formatTextToParagraphs(dataSource.Content);
  const [selectedValues, setSelectedValues] = useState(
    Array(paragraphs.length).fill("")
  );

  const handleSelectChange = (index, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 bg-white">
      <h1 className="text-2xl font-bold text-start">
        {getFirstValue(dataSource.Content)}
      </h1>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="pb-4">
          <div className="flex items-center gap-4">
            <p className="font-bold underline">{`Paragraph ${paragraph.number}`}</p>
            <select
              className="border p-2 rounded"
              value={selectedValues[index]}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option value="">Select answer</option>
              {dataSource?.AnswerContent.rightItems.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <p className="text-gray-700 mt-2">{paragraph.text}</p>
        </div>
      ))}
    </div>
  );
};
export default MatchingList;
