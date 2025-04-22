import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <span 
        className="text-8xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent"
      >
        Purifie ton karma
      </span>

      <div className="flex flex-row items-center justify-center font-[Inter]">
        <div className="flex flex-col items-center justify-center w-[33%]">
            <div className="text-2xl pb-4 font-[Cinzel] font-bold">
            ES-TU UN GASPILLEUR SANS SCRUPULE… OU UN MAÎTRE <span style={{ color: "#4CAF50" }}>DU ZÉRO DÉCHET ?</span>
            </div>
          <div>Bienvenue dans Le Jugement de Compostius, le test de pureté éco-responsable qui scanne ton âme... et ton bac à légumes.</div>
        </div>

        <img className="w-64" src='logo.png' alt='Description of the image'></img>

        <div className="flex flex-col items-center justify-center w-[33%]">
          <div className="pb-4">À travers un quizz narratif interactif, découvre ton niveau de karma écologique et affronte tes pires habitudes alimentaires.</div>
          <div className="pb-4">🥦 Réponds à des questions inspirées de la vie réelle (et du fond de ton frigo).</div>
          <div className="pb-4"> 🎭 Chaque choix modifie ton score de pureté et déclenche une réaction divine de Compostius.</div>
          <div className="pb-4">♻️ À la fin, tu reçois ton verdict écologique… et peut-être, une bénédiction du Dieu des épluchures.</div>
        </div>
      </div>


      <div>
        <span>Prêt à tester ton karma alimentaire ?</span>
      </div>

      <button className="bg-[#4CAF50] text-white font-bold py-2 px-4 rounded mt-8 shadow-[0_0_25px_#4CAF50] hover:shadow-[0_0_20px_#4CAF50] transition-shadow duration-300">
        <Link href="/quizz/1">
          COMMENCER LE TEST
        </Link>
      </button>
    </div >
  );
}
