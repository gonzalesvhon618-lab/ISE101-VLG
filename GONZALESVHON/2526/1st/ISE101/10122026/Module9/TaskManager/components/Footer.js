import { StyleSheet as StyleSheetVLG, Text as TextVLG, View as ViewVLG } from "react-native";

export default function FooterVLG() {
  return (
    <ViewVLG style={stylesVLG.footer}>
      <TextVLG style={stylesVLG.text}>ISE101  /  COMPONENTS & STATE</TextVLG>
    </ViewVLG>
  );
}

const stylesVLG = StyleSheetVLG.create({
  footer: {
    borderTopColor: "#DCE5DF",
    borderTopWidth: StyleSheetVLG.hairlineWidth,
    paddingHorizontal: 22,
    paddingVertical: 16,
  },
  text: {
    color: "#65756D",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
