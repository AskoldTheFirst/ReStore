import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponet from "../../app/layout/LoadingComponents";

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, []);

  if (loading){
    return <LoadingComponet message="Loading products ..." />
  }

  return (
    <>
      <ProductList products={products} />
    </>
  )
}