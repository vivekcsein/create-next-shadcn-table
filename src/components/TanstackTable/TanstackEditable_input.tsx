"use state";

import { Input } from "../ui/input";

// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "../ui/input";
// // import { Button } from "../ui/button";

// const FormSchema = z.object({
//   currentBid: z.preprocess(
//     (a) => parseInt(z.string().parse(a), 10),
//     z.number()
//   ),
// });

type TanstackEditable_inputProps = {
  bidValue?: number;
  previousBid?: number;
  editable: boolean;
  setEditable: (editable: boolean) => void;
};
const TanstackEditable_input = ({
  bidValue,
  previousBid,
  editable,
  setEditable,
}: TanstackEditable_inputProps) => {
  //   const { register, handleSubmit } = useForm();

  return (
    <div
      onClick={() => {
        setEditable(true);
      }}
    >
      {!editable ? (
        <div>{bidValue ? bidValue : 0}</div>
      ) : (
        <div>
          <Input
            placeholder="0"
            type="number"
            defaultValue={previousBid ? previousBid : 0}
            min={previousBid ? previousBid : 0}
            {...field}
          />
        </div>
      )}
    </div>
  );
};

export default TanstackEditable_input;
