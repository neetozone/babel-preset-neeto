import { useShallow } from "zustand/shallow";
const { order, customer } = useStore(
  useShallow(store => ({
    order: store["order"],
    customer: store["customer"],
  }))
);
