import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
        <span className="pb-8">
          Le jugement de <span style={{ color: "#4CAF50" }}>Compostius</span>
        </span>
        
        <span className="text-5xl font-bold">Purifie ton karma</span>

      <div className="flex flex-row items-center justify-center font-[Inter]">
        <div className="flex flex-col items-center justify-center w-[35%]">
          <div className="text-2xl pb-4">
            Es-tu un gaspilleur sans scrupule… ou un maître du zéro déchet ?
          </div>
          <div>Bienvenue dans Le Jugement de Compostius, le test de pureté éco-responsable qui scanne ton âme... et ton bac à légumes.</div>
        </div>

        <img className="w-64" src='logo.png' alt='Description of the image'></img>

        <div className="flex flex-col items-center justify-center w-[35%]">
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
        COMMENCER LE TEST
      </button>
    </div>
  );
}
