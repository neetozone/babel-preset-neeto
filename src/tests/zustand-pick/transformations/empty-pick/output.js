import { useShallow } from "zustand/shallow";
const { order, customer } = useGlobalStore(
  useShallow(store => ({
    order: store["order"],
    customer: store["customer"],
  }))
);
