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
import TanstackEditable_input from "./TanstackEditable_input";

const FormSchema = z.object({
  currentBid: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number()
  ),
});

const TanstackTable_dummy = () => {
  const [products, setProducts] = useState(taskData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [editable, setEditable] = useState(false);

//   const submitRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentBid: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(values.currentBid);
    } catch (error) {
      console.error(error + "something happen wrong");
    }
  };
  //   const handleSearch = (e) => {
  //     setSearchTerm(e.target.value);
  //   };
  //   const handleSort = (column: string) => {
  //     if (sortColumn === column) {
  //       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  //     } else {
  //       setSortColumn(column);
  //       setSortDirection("asc");
  //     }
  //   };
  //   const handleQuantityChange = (id, value) => {
  //     setProducts(
  //       products.map((product) =>
  //         product.id === id ? { ...product, quantity: value } : product
  //       )
  //     );
  //   };
  //   const handlePriceChange = (id, value) => {
  //     setProducts(
  //       products.map((product) =>
  //         product.id === id ? { ...product, price: value } : product
  //       )
  //     );
  //   };
  //   const handleImageChange = (id:number, value) => {
  //     setProducts(
  //       products.map((product) =>
  //         product.id === id ? { ...product, image: value } : product
  //       )
  //     );
  //   };

  const handleSave = (id: number) => {
    // setProducts(products.filter((product) => product.id !== id));
  };

  //   const handleDelete = (id) => {
  //     setProducts(products.filter((product) => product.id !== id));
  //   };
  //   const filteredProducts = products.filter(
  //     (product) =>
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       product.productDescription
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase())
  //   );
  //   const sortedProducts = sortColumn ? filteredProducts.sort((a, b) => {
  //         if (a[sortColumn] < b[sortColumn])
  //           return sortDirection === "asc" ? -1 : 1;
  //         if (a[sortColumn] > b[sortColumn])
  //           return sortDirection === "asc" ? 1 : -1;
  //         return 0;
  //       })
  //     : filteredProducts;

  return (
    <div className="w-full">
      {/* <div className="flex items-center justify-between mb-4">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md"
        />
      </div> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              SKU
              {sortColumn === "name" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                </span>
              )}
            </TableHead>
            <TableHead>
              Defect
              {sortColumn === "productName" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                </span>
              )}
            </TableHead>
            <TableHead>
              PreviousBId
              {sortColumn === "quantity" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                </span>
              )}
            </TableHead>
            <TableHead>
              Your Bid
              {sortColumn === "price" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
                </span>
              )}
            </TableHead>
            {/* <TableHead>Image</TableHead> */}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
                                 <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className=" *:space-y-1 px-2 md:px-10 my-6 flex flex-col gap-6"
                        >
                          <FormField
                            control={form.control}
                            name="currentBid"
                            render={({ field }: { field: any }) => (

            
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {product.id}
                  {/* <img
                    src="/placeholder.svg"
                    alt={product.assetSKU}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  <div>{product.assetSKU}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{product.defect}</div>
                  {/* <div className="text-muted-foreground">
                    {product.productDescription}
                  </div> */}
                </div>
              </TableCell>
              <TableCell>
                {product.previousBid}
                {/* <Input
                  type="number"
                  value={product.previousBid}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                  className="w-20"
                /> */}
              </TableCell>
              <TableCell>
                <div
                  onClick={() => {
                    setEditable(true);
                  }}
                >
                  {!editable ? (
                    <div>0</div>
                  ) : (
                    <div>
                      {/* <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className=" *:space-y-1 px-2 md:px-10 my-6 flex flex-col gap-6"
                        >
                          <FormField
                            control={form.control}
                            name="currentBid"
                            render={({ field }: { field: any }) => ( */}
                              <FormItem>
                                {/* <FormLabel>Place you bid Amount</FormLabel> */}
                                <FormControl>
                                  <>
                                    <Input
                                      placeholder="0"
                                      type="number"
                                      defaultValue={product.previousBid}
                                      min={product.previousBid}
                                      {...field}
                                    />
                                    {/* <input type="submit" value="" /> */}
                                  </>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                    //         )}
                    //       />
                    //     </form>
                    //   </Form>
                    </div>
                  )}
                </div>
                {/* <TanstackEditable_input previousBid={product.previousBid} /> */}
                {/* <Input
                  type="number"
                  value={product.price}
                  //   onChange={(e) =>
                  //     handlePriceChange(product.id, e.target.value)
                  //   }
                  className="w-20"
                /> */}
              </TableCell>
              {/* <TableCell>
                <Input
                  type="text"
                  value={product.image}
                  onChange={(e) =>
                    handleImageChange(product.id, e.target.value)
                  }
                  className="w-full"
                />
              </TableCell> */}
              <TableCell>
                <Button
                  type="submit"
                  variant="outline"
                  size="icon"
                  //   onClick={(e) => {
                  // e.preventDefault();
                  // handleSave(product.id);
                  // () => handleDelete(product.id)
                  //   }}
                >
                  <Save className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))
                               )}
                          />
                        </form>
                      </Form>
        </TableBody>
      </Table>
    </div>
  );
};

export default TanstackTable_dummy;

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
