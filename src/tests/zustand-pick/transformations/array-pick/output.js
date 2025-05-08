import { useShallow } from "zustand/shallow";
const { order, customer } = useGlobalStore(
  useShallow(store => ({
    order: store["state"]?.[sessionId]?.["current"]?.[data]?.["order"],
    customer: store["state"]?.[sessionId]?.["current"]?.[data]?.["customer"],
  }))
);
