import { FlatList, Text, View } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";
import styles from "./productRow.style";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  const renderItem = ({ item }) => <ProductCardView />;
  return <FlatList data={products} renderItem={renderItem} horizontal contentContainerStyle={{ columnGap: -8 }} showVerticalScrollIndicator={false} style={{ marginBottom: 20, marginHorizontal: 6 }} />;
};

export default ProductRow;
