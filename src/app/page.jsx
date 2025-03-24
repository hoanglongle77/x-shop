import Hero from "@/components/Hero/Hero";
import QuestionList from "@/components/Final-UI/QuestionList/QuestionList";
import Sidebar from "@/components/Sidebar/Sidebar";
import Trending from "@/components/Trending/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Hero />
      <Trending /> */}
      <div className="bg-gray-300 p-4 min-h-screen flex justify-around">
        <h1>Listening Test</h1>
      </div>
    </>
  );
}
