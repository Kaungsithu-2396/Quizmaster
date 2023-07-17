type Props = {
    amount: string;
    category: string;
    difficulty: string;
};
export default async function getQuiz({ amount, category, difficulty }: Props) {
    const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    if (!response.ok) throw new Error("sorry");
    return response.json();
}
