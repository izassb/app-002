import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";

export const CardTask = ({ task, taskDoneChange, removeTask, title, description }) => {
  const handleChange = () => {
    taskDoneChange({ objectId: task.objectId, done: !task.done });
  };

  const handleRemove = () => {
    removeTask(task.objectId);
  };

  return (
    <View style={styles.container}>
      <Text>
        {title} - {description} - {task.done ? "feita" : "a fazer"}      
      </Text>
      <Switch value={task.done} onValueChange={handleChange} />

      <TouchableOpacity onPress={handleRemove}>
        <Text>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "floralwhite",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
