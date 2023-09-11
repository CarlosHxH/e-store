"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import SearchResults from "react-filter-search";
import ProductGrid from "@/components/ProductGrid";
import SearchInput from "@/components/SearchInput";
import { Container, Spinner } from "react-bootstrap";

const queryClient = new QueryClient();

function CardProduct() {
  const [value, setValue] = useState("");
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch("https://fakestoreapi.com/products").then((res: any) => res.json())
  );

  if (isLoading) return <Container className="flex"><Spinner className={'m-auto'} animation="border" variant="info" /></Container>;
  if (error) return <Container className="mt-5 p-5">Ocorreu um erro: {error.message}</Container>;

  return (
    <Container fluid className="mt-5 pt-4">
      <SearchInput onSearch={(e: any) => setValue(e)} />
      <SearchResults
        value={value}
        data={data}
        renderResults={(res: any) => <ProductGrid data={res} />}
      />
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
