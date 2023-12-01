import React, { useEffect, useState } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import { getProductAPI, getProductBySlug } from "../api/product";

const Product = (props) => {
  const [product, setProduct] = useState(undefined);
  const [relatedProducts, setRelatedProducts] = useState([]);
  console.log(props.match.params.slug);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    var list = await getProductAPI();
    var productSlug = await getProductBySlug(props.match.params.slug);
    setProduct(productSlug);
    setRelatedProducts(list);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
