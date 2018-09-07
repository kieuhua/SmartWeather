import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
  small: {fontSize: 20, fontWeight: "bold" },
  normal: { fontSize: 24 },
  alternate: { fontSize: 50, color: "#FFFFFF" },
  big: { fontSize: 32, alignSelf: "center" }
});

export const scalingFactors = { normal: 15, big: 10 };
