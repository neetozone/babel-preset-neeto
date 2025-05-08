import { useShallow } from "zustand/shallow";
const { customer } = useGlobalStore(
  useShallow(store => ({
    customer: store[sessionId]?.["customer"],
  }))
);
