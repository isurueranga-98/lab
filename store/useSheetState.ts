import { ReactNode } from "react";
import { create } from "zustand";

type SheetState = {
  isOpen: boolean;
  title: string;
  description: string;
  content: ReactNode;
};
type SheetActions = {
  setOpen: (isOpen: boolean) => void;
  setSheet: ({}: {
    title: string;
    description: string;
    content: ReactNode;
  }) => void;
};

const initialSheetState: SheetState = {
  isOpen: false,
  title: "",
  description: "",
  content: null,
};

const useSheetState = create<SheetState & SheetActions>()((set) => ({
  ...initialSheetState,
  setOpen: (isOpen: boolean) => set({ isOpen }),
  setSheet: ({ title, description, content }) =>
    set({ title, description, content }),
}));

export default useSheetState;
