import { useShallow } from "zustand/shallow";
const { [`customer ${id}`]: customer } = useGlobalStore(
  useShallow(store => ({
    [`customer ${id}`]: store[sessionId]?.[`customer ${id}`],
  }))
);
const { [orderId]: order } = useGlobalStore(
  useShallow(store => ({
    [orderId]: store[sessionId]?.["orders"]?.[orderId],
  }))
);
