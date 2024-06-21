import { z } from "zod";
import { taskSchema } from "@/lib/validations/tableSchema";
import { METHODS } from "http";

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

export const postData = async (yourBid: number, id: number) => {
    if (!process.env.API_Link) {
        throw new Error("API_Link environment variable is not set");
    }
    const res = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            yourbid: yourBid,
        }),
    });
    const resData = await res.json();
    return resData;
}