import { cache } from "react";

export default async function getCategories() {
    const response = await fetch("https://opentdb.com/api_category.php");
    if (!response.ok) undefined;
    return response.json();
}
