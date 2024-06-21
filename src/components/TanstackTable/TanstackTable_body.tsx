"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import TanstackEditable_input from "./TanstackEditable_input";
import { Save } from "lucide-react";
import { Button } from "../ui/button";

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
import { Input } from "../ui/input";
import { useState } from "react";
import { postData } from "@/lib/api/fetchapi";
// import { Button } from "../ui/button";

const FormSchema = z.object({
  currentBid: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number()
  ),
});

type TanstackTable_bodyProps = {
  product: taskDataType;
};

const TanstackTable_body = ({ product }: TanstackTable_bodyProps) => {
  const [editable, setEditable] = useState(false);
  const [usercurrentBid, setUserCurrentBid] = useState(product.yourBid);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentBid: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(
        ` update data of product id ${product.id} with value ${values.currentBid} to server `
      );
      //   const res = postData(values.currentBid, product.id);
      //   const resData = res.then((data) => {
      //     console.log(data);
      //     // if (data.statusCode == 409) {
      //     //   form.setError(resData.user, {
      //     //     type: "custom",
      //     //     message: resData.message,
      //     //   });
      //     // }
      //   });

      setEditable(false);
      setUserCurrentBid(values.currentBid);
    } catch (error) {
      console.error(error + "something happen wrong");
    }
  };

  return (
    <TableRow key={product.id}>
      <TableCell className="flex">
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className=" *:space-y-1 px-2 md:px-10 my-6 flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="currentBid"
              render={({ field }: { field: any }) => (
                <div className="flex">
                  <TableCell>
                    <div>{product.assetSKU}</div>
                  </TableCell>
                  <TableCell>
                    <div>{product.defect}</div>
                  </TableCell>
                  <TableCell>
                    <div>{product.previousBid}</div>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      setEditable(true);
                    }}
                    className="cursor-pointer"
                  >
                    {!editable ? (
                      <div>{usercurrentBid}</div>
                    ) : (
                      <Input
                        placeholder="0"
                        type="number"
                        defaultValue={
                          product.previousBid ? product.previousBid : 0
                        }
                        min={product.previousBid ? product.previousBid : 0}
                        {...field}
                        onChange={(e) => {
                          // form.handleSubmit(onSubmit);
                        }}
                      />
                    )}
                    {/* <TanstackEditable_input /> */}
                  </TableCell>
                  <TableCell>
                    <Button type="submit" variant="outline" size="icon">
                      <Save className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </div>
              )}
            />
          </form>
        </Form>
      </TableCell>
    </TableRow>
  );
};

export default TanstackTable_body;
