import {
  StyleSheet as StyleSheetVLG,
  Text as TextVLG,
  View as ViewVLG,
} from "react-native";

export default function AppVLG() {
  return (
    <ViewVLG style={stylesVLG.container}>
      <TextVLG style={stylesVLG.title}>Hello, I'm Francis Alave!</TextVLG>
      <TextVLG style={stylesVLG.subtitle}>BSIS 3A</TextVLG>
    </ViewVLG>
  );
}

const stylesVLG = StyleSheetVLG.create({
  container: {
    alignItems: "center",
    backgroundColor: "#EAF4FF",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#153D32",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    color: "#555555",
    fontSize: 18,
  },
});
