import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
// import { fetchData } from "@/lib/api/fetchapi";
import { taskData } from "@/lib/constants/taskData";
const TanstackTable_main = async () => {
  // const tasks = await fetchData();

  const tasks = taskData();
  console.log(tasks);

  return (
    <section className="px-10 py-5">
      <DataTable data={tasks} columns={columns} />
    </section>
  );
};

export default TanstackTable_main;
