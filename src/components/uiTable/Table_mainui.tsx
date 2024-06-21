"use client";
import React, { useState } from "react";
import { taskData } from "@/lib/constants/taskData";
import { DataTable } from "../data-table/data-table";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormField,
  // FormControl,
  // FormItem,
  // FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { columns } from "./ui/Table_Count";
import { Button } from "../ui/button";
import Table_Data from "./ui/Table_Data";
import { DataTablePagination } from "../data-table/data-table-pagination";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const FormSchema = z.object({
  input: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number()),
});

const Table_mainui = () => {
  const [currentTableData, setCurrentTableData] = useState<Array<TData>>(() => {
    const tasks = taskData();
    return tasks;
  });

  const [currentTablePage, setCurrentTablePage] = useState<number>(1);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = React.useState({});

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      input: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(
        ` update data of product id with value ${values.input} to server `
      );
      //   const res = postData(values.currentBid, product.id);
      //   const resData = res.then((data) => {
      //     console.log(data);
      //   });
    } catch (error) {
      console.error(error + "something happen wrong");
    }
  };

  return (
    <section className="px-10 py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" *:space-y-1 px-2 md:px-10 my-6 flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }: { field: any }) => (
              <>
                <Table_Data data={currentTableData} columns={columns} />
                {/* <DataTablePagination table={currentTableData} /> */}
              </>
            )}
          />
          <Button type="submit">Save button</Button>
        </form>
      </Form>
    </section>
  );
};

export default Table_mainui;
