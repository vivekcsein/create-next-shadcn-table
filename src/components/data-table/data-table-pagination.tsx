import { type Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
  fetchData?: boolean;
  setFetchdata?: (fetchData: boolean) => void;
}

// Give our default column cell renderer editing superpowers!
// const defaultColumn: Partial<ColumnDef<TData>> = {
//   cell: ({ getValue, row, column, table }) => {
//     const initialValue = getValue();
//     // We need to keep and update the state of the cell normally
//     const [value, setValue] = React.useState(initialValue);

//     // When the input is blurred, we'll call our table meta's updateData function
//     const onBlur = () => {
//       table.options.meta?.updateData(index, id, value);
//     };

//     // If the initialValue is changed external, sync it up with our state
//     React.useEffect(() => {
//       setValue(initialValue);
//     }, [initialValue]);

//     return (
//       <input
//         value={value as string}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={onBlur}
//       />
//     );
//   },
// };

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [10, 20, 30, 40, 50],
  fetchData,
  setFetchdata,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      {/* <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div> */}
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              table.setPageIndex(table.getPageCount() - 1);
              if (fetchData) {
                // fetch();
              }
            }}
            disabled={
              !table.getCanNextPage()
              //   () => {
              //   if (setFetchdata) {
              //     setFetchdata(true);
              //   }
              // }
            }
          >
            {!fetch ? (
              <>
                <span className="sr-only">Go to last page</span>
                <ChevronsRight className="h-4 w-4" />
              </>
            ) : (
              <div>Load more ...</div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
