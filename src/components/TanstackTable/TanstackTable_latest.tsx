"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "../ui/input";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { taskData } from "@/lib/constants/taskData";
import { Save } from "lucide-react";
import TanstackTable_body from "./TanstackTable_body";

const TanstackTable_latest = () => {
  const [products, setProducts] = useState(taskData);

  return (
    <section className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SKU</TableHead>
            <TableHead>Defect</TableHead>
            <TableHead>PreviousBId</TableHead>
            <TableHead>Your Bid</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TanstackTable_body product={product} key={product.id} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TanstackTable_latest;
