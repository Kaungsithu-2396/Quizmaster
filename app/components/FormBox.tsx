"use client";
type Props = {
    options: category;
};
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useState } from "react";
export default function FormBox({ options }: Props) {
    const router = useRouter();
    const [count, setCount] = useState(1);
    const [level, setLevel] = useState("hard");
    const [selectCat, setSelectCat] = useState<string>("9");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/${selectCat}/${count}/${level.toLowerCase()}`);
    };
    return (
        <>
            <form
                action=""
                className="flex flex-col gap-5 md:border-2 lg:p-20 p-5 rounded-lg  "
                onSubmit={handleSubmit}
            >
                <label htmlFor="category" className="text-2xl">
                    Choose Category
                </label>

                <select
                    name=""
                    id=""
                    onChange={(e) => setSelectCat(e.target.value)}
                    className="text-black py-4 px-2 rounded-md lg:p-4"
                >
                    {options.trivia_categories.map((el) => {
                        return (
                            <option value={el.id} key={el.id}>
                                {el.name}
                            </option>
                        );
                    })}
                </select>

                <label htmlFor="" className="text-2xl flex flex-col">
                    Quiz Count
                    <span className="text-xl text-white/50">
                        range between 1- 5
                    </span>
                </label>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="^[1-5]$"
                    className="text-black  p-4 text-center rounded-md"
                    min={1}
                    max={10}
                    id=""
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <label htmlFor="" className="text-2xl">
                    Quiz Level
                </label>
                <select
                    name=""
                    id=""
                    className="text-black p-4 text-center rounded-md"
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="Hard">Hard</option>
                    <option value="Medium">Medium</option>
                    <option value="Easy">Easy</option>
                </select>
                <button
                    type="submit"
                    className="px-5 py-2 bg-orange-500 w-[60%] m-auto rounded-lg mt-10 hover:scale-110 duration-300 delay-200"
                >
                    Generate Quiz
                </button>
            </form>
        </>
    );
}
