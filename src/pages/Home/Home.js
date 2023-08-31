import React from "react";
import { Header } from "../../components/Header";
import { TopicStore } from "../../components/TopicStore";
import { RelatedProducts } from "../../components/RelatedProducts";
import { ContentCards } from "../../components/Partners";
import { BrowseBrands } from "../../components/BrowseBrands";
import FooterHome from "./FooterHome";
import Footer from "../../components/Footer";
import { ProductList } from "../../components/ProductList";

export const Home = () => {
  return (
    <>
      <Header />
      <TopicStore />
      <RelatedProducts />
      <ProductList />
      <ContentCards />
      <BrowseBrands />
      <FooterHome />
      <Footer />
    </>
  );
};
