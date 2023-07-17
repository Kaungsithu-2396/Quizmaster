import React from "react";
import { Metadata } from "next";
type Props = {
    params: {
        searchCount: string[];
    };
};
export const metadata: Metadata = {
    title: "Quiz Time",
    description: "Questions",
};

import QuizCollection from "../components/QuizCollection";
import getQuiz from "@/lib/getQuiz";
export default async function page({ params: { searchCount } }: Props) {
    const [category, amount, difficulty] = searchCount; //change to intended object using destructring concept
    const intendentObjectData = { category, amount, difficulty };
    const quizData: Promise<responseQuiz> = getQuiz(intendentObjectData);
    const quizCollection = (await quizData).results;

    return (
        <>
            <article className="flex justify-center items-center h-screen flex-col ">
                <QuizCollection quiz={quizCollection} />
            </article>
        </>
    );
}
