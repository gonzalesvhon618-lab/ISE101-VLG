import { useState as useStateVLG } from "react";
import {
  FlatList as FlatListVLG,
  KeyboardAvoidingView as KeyboardAvoidingViewVLG,
  Platform as PlatformVLG,
  StyleSheet as StyleSheetVLG,
  Text as TextVLG,
  TextInput as TextInputVLG,
  TouchableOpacity as TouchableOpacityVLG,
  View as ViewVLG,
} from "react-native";
import FooterVLG from "../components/Footer";
import HeaderVLG from "../components/Header";
import TaskItemVLG from "../components/TaskItem";

export default function TaskScreenVLG() {
  const [taskVLG, setTaskVLG] = useStateVLG("");
  const [tasksVLG, setTasksVLG] = useStateVLG([
    { idVLG: "sample-1", titleVLG: "Read React docs" },
    { idVLG: "sample-2", titleVLG: "Finish homework" },
    { idVLG: "sample-3", titleVLG: "Buy groceries" },
  ]);

  const addTaskVLG = () => {
    const trimmedTaskVLG = taskVLG.trim();
    if (!trimmedTaskVLG) return;

    setTasksVLG((currentTasksVLG) => [
      ...currentTasksVLG,
      { idVLG: `${Date.now()}`, titleVLG: trimmedTaskVLG },
    ]);
    setTaskVLG("");
  };

  const deleteTaskVLG = (taskIdVLG) => {
    setTasksVLG((currentTasksVLG) =>
      currentTasksVLG.filter((currentTaskVLG) => currentTaskVLG.idVLG !== taskIdVLG),
    );
  };

  return (
    <ViewVLG style={stylesVLG.container}>
      <HeaderVLG />
      <KeyboardAvoidingViewVLG
        behavior={PlatformVLG.OS === "ios" ? "padding" : undefined}
        style={stylesVLG.body}
      >
        <TextVLG style={stylesVLG.sectionLabel}>YOUR LIST</TextVLG>
        <ViewVLG style={stylesVLG.entryRow}>
          <TextInputVLG
            accessibilityLabel="New task"
            onChangeText={setTaskVLG}
            onSubmitEditing={addTaskVLG}
            placeholder="Enter a new task"
            placeholderTextColor="#78857E"
            returnKeyType="done"
            style={stylesVLG.input}
            value={taskVLG}
          />
          <TouchableOpacityVLG
            accessibilityRole="button"
            onPress={addTaskVLG}
            style={stylesVLG.addButton}
          >
            <TextVLG style={stylesVLG.addButtonText}>Add</TextVLG>
          </TouchableOpacityVLG>
        </ViewVLG>
        <FlatListVLG
          contentContainerStyle={stylesVLG.list}
          data={tasksVLG}
          keyExtractor={(itemVLG) => itemVLG.idVLG}
          ListEmptyComponent={
            <TextVLG style={stylesVLG.empty}>Nothing on the list yet.</TextVLG>
          }
          renderItem={({ item: itemVLG }) => (
            <TaskItemVLG
              onDeleteVLG={() => deleteTaskVLG(itemVLG.idVLG)}
              taskVLG={itemVLG.titleVLG}
            />
          )}
        />
      </KeyboardAvoidingViewVLG>
      <FooterVLG />
    </ViewVLG>
  );
}

const stylesVLG = StyleSheetVLG.create({
  container: {
    backgroundColor: "#F5F7F4",
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionLabel: {
    color: "#53685D",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 10,
  },
  entryRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#C8D4CC",
    borderRadius: 8,
    borderWidth: 1,
    color: "#18392E",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#153D32",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 52,
    paddingHorizontal: 18,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  list: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  empty: {
    color: "#65756D",
    fontSize: 15,
    paddingVertical: 24,
    textAlign: "center",
  },
});
