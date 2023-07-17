import Link from "next/link";
import React from "react";

type Props = {
    score: number;
    quizCount: number;
};

export default function Score({ score, quizCount }: Props) {
    return (
        <>
            <h1 className="my-3 text-xl">Congraulations!</h1>
            <h1 className="text-4xl  p-10 rounded-lg">
                Score- <span className="text-5xl text-orange-500">{score}</span>
                /{quizCount}
            </h1>
            <hr />
            <h2 className="text-3xl text-center m-4">
                Thanks <span className="text-orange-500">Indeed</span> for your
                visit
            </h2>
            <Link href={"/"} className="text-orange-500 text-2xl underline">
                Back to Menu
            </Link>
        </>
    );
}
