"use client";
import React from "react";
import { decode } from "html-entities";
type Props = {
    quiz: quiz[];
};
import { useState } from "react";
import Score from "./Score";
export default function QuizCollection({ quiz }: Props) {
    const [active, setActive] = useState("");
    const [currentQuiz, setCurrentQuiz] = useState<number>(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const activeQuiz: quiz = quiz[currentQuiz];
    const onClickNextQuizHandler = () => {
        activeQuiz.correct_answer === active && setScore(score + 1);
        if (currentQuiz < quiz.length - 1) {
            setCurrentQuiz(currentQuiz + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <>
            {!showResult ? (
                <>
                    <section className=" flex flex-col w-[95%] text-center md:w-[50%] m-auto ">
                        <h1 className="text-center mb-12 text-2xl md:text-3xl">
                            Question{" "}
                            <span className="text-orange-500 font-bold">
                                {currentQuiz + 1}
                            </span>
                            /{quiz.length}
                        </h1>
                        <h1 className="md:text-3xl text-2xl">
                            {decode(activeQuiz.question)}
                        </h1>
                        <ul className="my-5 text-2xl grid grid-cols-2 gap-5 ">
                            <li
                                className={`  rounded-md hover:bg-orange-500/50 w-fit px-4 py-2 hover:scale-105 duration-300   cursor-pointer delay-100 
                                     ${
                                         active === activeQuiz.correct_answer &&
                                         "active"
                                     } `}
                                onClick={() =>
                                    setActive(activeQuiz.correct_answer)
                                }
                            >
                                {"1.  "}
                                {decode(activeQuiz.correct_answer)}
                            </li>

                            {activeQuiz.incorrect_answers.map((el, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className={` rounded-md  px-4 py-2 w-fit    hover:bg-orange-500/60 hover:scale-105 duration-300 cursor-pointer delay-100 
                                           ${active === el && "active"}`}
                                        onClick={() => setActive(el)}
                                    >
                                        {idx + 2}. {decode(el)}
                                    </li>
                                );
                            })}
                        </ul>

                        <button
                            className={`  text-center bg-orange-500 text-black hover:scale-105 duration-200 delay-200 px-3 py-4 mt-3  rounded-md  w-[30%] m-auto
                    ${!(currentQuiz + 1 < quiz.length + 1) && "hidden"}
                    `}
                            onClick={onClickNextQuizHandler}
                        >
                            Next Quiz
                        </button>
                    </section>
                </>
            ) : (
                <Score score={score} quizCount={quiz.length} />
            )}
        </>
    );
}
