import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./productCardView.style";

const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=327&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text>Product</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
