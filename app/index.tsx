import { ActivityIndicator, Button, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQueueStore } from "@/store/queue";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { queue, add, isLoading, remove, reset } = useQueueStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        title="Go to Teste"
        onPress={() => {
          router.push("/teste");
        }}
      />
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
      <ThemedView style={styles.conatiner}>
        <ThemedView style={styles.boxTest}>
          <ActivityIndicator
            color="#fff"
            size="large"
            animating={isLoading("teste 1")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </ThemedView>
        <ThemedView
          style={[styles.boxTest, { backgroundColor: "#cc3f", flex: 1 }]}
        >
          <ActivityIndicator
            color="#fff"
            size="large"
            animating={isLoading("teste 2")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </ThemedView>
      </ThemedView>
      <ThemedText>{JSON.stringify(queue)}</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },
  boxTest: {
    height: 200,
    backgroundColor: "#cc3f34",
    borderRadius: 10,
    flex: 1,
  },
});
