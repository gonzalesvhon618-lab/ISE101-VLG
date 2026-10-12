import { StyleSheet as StyleSheetVLG, Text as TextVLG, TouchableOpacity as TouchableOpacityVLG, View as ViewVLG } from "react-native";

export default function TaskItemVLG({ taskVLG, onDeleteVLG }) {
  return (
    <ViewVLG style={stylesVLG.item}>
      <TextVLG style={stylesVLG.text}>{taskVLG.toUpperCase()}</TextVLG>
      <TouchableOpacityVLG
        accessibilityRole="button"
        accessibilityLabel={`Delete ${taskVLG}`}
        onPress={onDeleteVLG}
        style={stylesVLG.deleteButton}
      >
        <TextVLG style={stylesVLG.delete}>Delete</TextVLG>
      </TouchableOpacityVLG>
    </ViewVLG>
  );
}

const stylesVLG = StyleSheetVLG.create({
  item: {
    alignItems: "center",
    backgroundColor: "#DDF3E8",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 14,
  },
  text: {
    color: "#18392E",
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 12,
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  delete: {
    color: "#A53535",
    fontSize: 14,
    fontWeight: "700",
  },
});
