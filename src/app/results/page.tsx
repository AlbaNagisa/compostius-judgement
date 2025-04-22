"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.setItem("score", "100");
    const fetchDescription = async () => {
      console.log(localStorage.getItem("score"));

      const scoreFromLocalstorage = parseInt(
        localStorage.getItem("score") ?? "0",
      );
      setScore(scoreFromLocalstorage);
      if (scoreFromLocalstorage) {
        const response = await fetch("/api/quizz/end", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ score: scoreFromLocalstorage }),
        });
        const data = await response.json();
        console.log(data);
      }
    };
    fetchDescription();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mt-4 text-lg">{description}</p>
    </div>
  );
};

export default Page;
