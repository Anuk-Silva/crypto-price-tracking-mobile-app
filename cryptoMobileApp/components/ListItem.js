import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl }) => {

  const priceChangeColor = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/*Left Side View*/}
        <View style={styles.leftSideWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.ticker}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/*Right Side View*/}
        <View style={styles.rightSideWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
          <Text style={[styles.ticker, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSideWrapper: {
    flexDirection: "row",
    alignContent: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  ticker: {
    marginTop: 4,
    fontSize: 14,
    color: "A9ABB1",
  },
  rightSideWrapper: {
    alignItems: "flex-end",
  },
});

export default ListItem;
