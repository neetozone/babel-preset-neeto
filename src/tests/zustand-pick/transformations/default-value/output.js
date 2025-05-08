import { useShallow } from "zustand/shallow";
const { orderId = "#1001", customer = {} } = useGlobalStore(
  useShallow(store => ({
    orderId: store["orderId"],
    customer: store["customer"],
  }))
);
