import React from "react";
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

type Table_paginationProps = {
  table: Table<TData>;
  pageSizeOptions?: number[];
};
const Table_pagination = ({}) => {
  return <div>Table_pagination</div>;
};

export default Table_pagination;
