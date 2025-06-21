import { create } from "zustand";

// Store para controle de filas

type Queue = {
  name: string;
  status: "loading" | "success" | "error";
};

export const useQueueStore = create<{
  queue: Queue[];
  add: (newQueue: Queue) => void;
  remove: (queueName: string) => void;
  isLoading: (queueName: string) => boolean;
  reset: () => void;
}>((set, get) => ({
  queue: [],
  add: (newQueue) => {
    // Simula um delay de 8 segundos para a fila ser concluída
    // setTimeout(() => {
    //   set((state) => ({
    //     queue: state.queue.map((i) =>
    //       i.name === newQueue.name ? { ...i, status: "success" } : i
    //     ),
    //   }));
    // }, 8000);

    set((state) => ({ queue: [...state.queue, newQueue] }));
  },
  remove: (queueName) =>
    set((state) => ({
      queue: state.queue.filter((queue) => queue.name !== queueName),
    })),
  reset: () => set({ queue: [] }),
  isLoading: (queueName) => {
    const queue = get().queue.find((queue) => queue.name === queueName);
    return queue?.status === "loading";
  },
}));
