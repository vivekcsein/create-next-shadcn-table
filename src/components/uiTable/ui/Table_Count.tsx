"use client";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions";
import { TaskType } from "@/lib/validations/tableSchema";

export const columns: ColumnDef<TaskType>[] = [
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
  {
    accessorKey: "assetSKU",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
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
      return (
        <div className="flex w-[100px] items-center">{row.original.defect}</div>
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
      return (
        <div className="flex items-center">{row.original.previousBid}</div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "yourBid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Your Bid" />
    ),
    cell: ({ row }) => {
      const val = row.getValue("yourBid") as number;
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
];
