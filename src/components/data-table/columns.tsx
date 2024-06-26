"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { TaskType } from "@/lib/validations/tableSchema";
import {
  label_options,
  priority_options,
  status_options,
} from "../../lib/constants/filters";
import { useState } from "react";

export const columns: ColumnDef<TaskType>[] = [
  // const [input,setInput] = useState(true);
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "assetSKU",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Name" />
    ),
    cell: ({ row }) => {
      // const label = label_options.find(
      //   (label) => label.value === row.original.assetSKU
      // );

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("assetSKU")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "defect",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Defects" />
    ),
    cell: ({ row }) => {
      // console.log(row.original.defect);

      // const status = status_options.find(
      //   (status) => status.value === row.getValue("defect")
      // );

      // if (!status) {
      //   return null;
      // }

      return (
        <div className="flex w-[100px] items-center">
          {row.original.defect}
          {/* {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span> */}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "previousBid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Previous Bid" />
    ),
    cell: ({ row }) => {
      // const priority = priority_options.find(
      //   (priority) => priority.value === row.getValue("priority")
      // );

      // if (!priority) {
      //   return null;
      // }

      return (
        <div className="flex items-center">
          {row.original.previousBid}
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span> */}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "yourBid",
    // const [input,setInput] = useState(0)
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Your Bid" />
    ),
    cell: ({ row }) => {
      // const field = row.getValue("due_date") as Date;
      // return <div>{field.toDateString()}</div>;
      const val = row.getValue("yourBid") as number;
      // console.log(val);
      return (
        <div
          className="flex items-center"
          onClick={() => {
            console.log(row.original.id);
          }}
        >
          {val}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
