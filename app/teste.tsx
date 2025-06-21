import { useQueueStore } from "@/store/queue";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TesteScreen() {
  const { add, remove, reset } = useQueueStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        title="Add Queue 1"
        onPress={() => {
          add({ name: "teste 1", status: "loading" });
        }}
      />
      <Button
        title="Remove Queue 1"
        onPress={() => {
          remove("teste 1");
        }}
      />
      <Button
        title="Add Queue 2"
        onPress={() => {
          add({ name: "teste 2", status: "loading" });
        }}
      />
      <Button
        title="Remove Queue 2"
        onPress={() => {
          remove("teste 2");
        }}
      />

      <Button
        title="Reset Queues"
        onPress={() => {
          reset();
        }}
      />
    </SafeAreaView>
  );
}
