"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [description, setDescription] = useState("");
  const [scoreGrade, setScoreGrade] = useState("");
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [logoEmotion, setLogoEmotion] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
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
        setDescription(data.message);
      }
    };
    fetchDescription();
  }, []);

  useEffect(() => {
    const percentage = Math.floor((score / 1000) * 100);
    let emotion = "";
    let grade = "";
    if (percentage >= 75) {
      emotion = "happy";
      grade = "Grand Éplucheur Éveillé";
    } else if (percentage >= 50) {
      emotion = "smile";
      grade = "Moine de la Conservation";
    } else if (percentage >= 25) {
      emotion = "sad";
      grade = "Pécheur Périmé";
    } else {
      emotion = "very-sad";
      grade = "Apôtre du Gaspillage";
    }
    setLogoEmotion(emotion);
    setScoreGrade(grade);
  }, [score]);

  if (!description) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-between px-6 h-[90%] ">
      <div className="flex flex-col w-[50%] h-[90%] gap-6 ">
        <p className={"text-xl"}>Le Jugement Final de Compostius</p>
        <div className={"flex "}>
          <p className={"font-bold text-2xl"}>Score :</p>
          <span className={`ml-4 font-bold text-2xl text-${logoEmotion}`}>
            {score} points
          </span>
        </div>
        <p className={"text-xl mt-20"}>Ton verdict sacré</p>
        <p className={"font-bold text-2xl"}>{scoreGrade}</p>
        <p>{description}</p>
        <div className={"flex flex-col gap-2"}>
          <div
            style={{ boxShadow: "0px 4px 35px 0px #4CAF50" }}
            className="mt-10 bg-[#4CAF50] w-fit p-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Recommencer
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src={`/${logoEmotion}-logo.png`}
          height={966}
          width={448}
          alt={logoEmotion}
        />
      </div>
    </div>
  );
};

export default Page;
