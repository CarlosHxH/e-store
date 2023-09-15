"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import SearchResults from "react-filter-search";
import SearchInput from "@/components/SearchInput";
import ProductGrid from "@/components/ProductGrid";
import CardPlaceholder from '@/components/CardPlaceholder';
import CartComponent from "@/components/CartComponent";

const queryClient = new QueryClient();

function CardProduct() {
  const [value, setValue] = useState("");
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch("https://fakestoreapi.com/products").then((res: any) => res.json())
  );

  if (isLoading) return (<Container fluid><CardPlaceholder items={16}/></Container>);
  if (error) return <Container>Ocorreu um erro: {error.message}</Container>;

  return (
    <Container fluid>

      <CartComponent/>
      <SearchInput onSearch={(e: any) => setValue(e)} />
      <SearchResults
        value={value}
        data={data}
        renderResults={(res: any) => <ProductGrid data={res} />}/>
    </Container>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CardProduct />
    </QueryClientProvider>
  );
}
