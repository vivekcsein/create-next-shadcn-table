import { z } from "zod";
import { taskSchema } from "@/lib/validations/tableSchema";

export const fetchData = async () => {
    if (!process.env.API_Link) {
        throw new Error("API_Link environment variable is not set");
    }
    const res = await fetch(
        process.env.API_Link
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const tasks = z.array(taskSchema).parse(
        data.map((task: any) => {
            task.due_date = new Date(Date.parse(task.due_date));
            return task;
        })
    );
    return tasks;
}