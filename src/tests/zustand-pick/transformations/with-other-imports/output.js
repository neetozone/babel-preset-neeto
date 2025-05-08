import { useShallow } from "zustand/shallow";
import React from "react";
import { sample } from "somewhere";
const { order, customer } = useGlobalStore(
  useShallow(store => ({
    order: store["order"],
    customer: store["customer"],
  }))
);
