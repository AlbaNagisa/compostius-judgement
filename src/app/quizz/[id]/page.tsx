'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function QuizzPage() {
    const router = useRouter();
    const params = useParams();

    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const [quizz, setQuizz] = useState<any>(null);
    const [allQuizz, setAllQuizz] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizz = async () => {
            const res = await fetch(`/api/quizz/${id}`);
            const data = await res.json();
            setQuizz(data);
            setLoading(false);
        };

        const fetchAllQuizz = async () => {
            const res = await fetch(`/api/quizz`);
            const data = await res.json();
            setAllQuizz(data);
        };

        fetchQuizz();
        fetchAllQuizz();
    }, [id]);

    const handleAnswer = (score: number) => {
        const currentScore = Number(localStorage.getItem('score')) || 0;
        const newScore = currentScore + score;
        localStorage.setItem('score', String(newScore));

        if (id && Number(id) < allQuizz.length) {
            router.push(`/quizz/${parseInt(id) + 1}`);
        } else {
            router.push(`/results`);
        }
    };


    if (loading) return <p>Chargement…</p>;
    if (!quizz || !quizz.question) return <p>Quizz introuvable</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
            <div className="text-center max-w-xl">
                <p className="mb-6 font-bold uppercase">{quizz.question}</p>

                {Object.entries(quizz.options).map(([option, _score], index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(_score as number)}

                        className="block w-full border border-white rounded-md p-4 my-2 hover:bg-green-800 transition-colors"
                    >
                        {String.fromCharCode(65 + index)}. {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
