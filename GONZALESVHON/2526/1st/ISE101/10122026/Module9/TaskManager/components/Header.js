import { StyleSheet as StyleSheetVLG, Text as TextVLG, View as ViewVLG } from "react-native";

export default function HeaderVLG() {
  return (
    <ViewVLG style={stylesVLG.header}>
      <TextVLG style={stylesVLG.kicker}>ISE101 / WEEK 03</TextVLG>
      <TextVLG style={stylesVLG.title}>Task Manager</TextVLG>
    </ViewVLG>
  );
}

const stylesVLG = StyleSheetVLG.create({
  header: {
    backgroundColor: "#153D32",
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 24,
  },
  kicker: {
    color: "#A9D5BD",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
  },
});
