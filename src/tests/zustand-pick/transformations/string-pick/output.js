import { useShallow } from "zustand/shallow";
const { order, customer, address } = useGlobalStore(
  useShallow(store => ({
    order: store["state"]?.["order"],
    customer: store["state"]?.["customer"],
    address: store["state"]?.["address"],
  }))
);
