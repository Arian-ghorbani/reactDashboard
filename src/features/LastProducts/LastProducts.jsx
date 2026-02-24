import Table from "../../components/Table/Table";
import TableHead from "../../components/Table/elements/TableHead";
import TableHeadCell from "../../components/Table/elements/TableHeadCell";
import TableBody from "../../components/Table/elements/TableBody";
import TableRow from "../../components/Table/elements/TableRow";
import TableCell from "../../components/Table/elements/TableCell";
import RemoveProduct from "./components/RemoveProduct";
import ChangeVisibleProduct from "./components/ChangeVisibleProduct";
import EditProduct from "./components/EditProduct";
import { productsHeadTitleRow } from "../../data/products";
import { productsData } from "../../data/products";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";
import clsx from "clsx";

function LastProducts() {
  const [products, setProducts] = useState([...productsData].reverse());
  const paginationData = {
    item: [...productsData].reverse(),
    setItem: setProducts,
    itemsPerPage: 10,
  };

  const removeProduct = (id) => {
    const mainProducts = products.filter((product) => product.id !== id);
    setProducts(mainProducts);
  };

  const changeVisibleProduct = (id) => {
    const newProducts = products.map((product) =>
      product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product },
    );

    setProducts(newProducts);
  };

  return (
    <section className="p-4 bg-card rounded-2xl">
      <Table
        header={{
          title: "لیست محصولات",
          Buttons: () => (
            <Link
              to={"/products"}
              className="flex items-center gap-x-1 text-primary cursor-pointer transition-colors duration-150 hover:text-tertiary"
            >
              صفحه محصولات
              <MdOpenInNew />
            </Link>
          ),
        }}
        pagination={paginationData}
      >
        <TableHead>
          {productsHeadTitleRow.map((item) => (
            <TableHeadCell key={item}>{item}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <p>{row.id}</p>
              </TableCell>

              <TableCell>
                <p>{row.title}</p>
              </TableCell>

              <TableCell>
                <p
                  className={clsx(
                    row.isPublished
                      ? "bg-green-200 text-green-900"
                      : "bg-sky-200 text-sky-900",
                  )}
                >
                  {row.isPublished ? "منتشر شده" : "خصوصی"}
                </p>
              </TableCell>

              <TableCell>
                <p>
                  {row.price
                    ? `${row.price.toLocaleString()} تومان`
                    : "ناموجود"}
                </p>
              </TableCell>

              <TableCell>
                <RemoveProduct
                  productId={row.id}
                  productTitle={row.title}
                  onSubmit={removeProduct}
                ></RemoveProduct>

                <ChangeVisibleProduct
                  product={row}
                  onSubmit={changeVisibleProduct}
                ></ChangeVisibleProduct>

                <EditProduct></EditProduct>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default LastProducts;
