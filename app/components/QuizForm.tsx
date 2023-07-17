import getCategories from "@/lib/getCategories";
import FormBox from "./FormBox";
export default async function QuizForm() {
    const data: Promise<category> = getCategories();
    const categories = await data;
    return <FormBox options={categories} />;
}
