type category = {
    trivia_categories: specificCategory[];
};
type specificCategory = {
    id: number;
    name: string;
};
type responseQuiz = {
    response_code: number;
    results: quiz[];
};
type quiz = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};
