import { useQuery } from "@tanstack/react-query";
import questionsData from "@/services/data";
import axios from "axios";

const fetchQuestions = async () => {
  const response = await axios.get("/data.json"); // Fetch JSON from public folder
  return response.data;
};

export const useQuestionsQuery = () => {
  return useQuery({
    queryKey: ["exams"],
    queryFn: fetchQuestions,
    staleTime: 60000, // Cache for 1 minute
  });
};
