import { ReactNode } from "react";
import { create } from "zustand";

type DialogState = {
  isOpen: boolean;
  title: string;
  description: string;
  content: ReactNode;
};
type DialogActions = {
  setOpen: (isOpen: boolean) => void;
  setDialog: ({}: {
    title: string;
    description: string;
    content: ReactNode;
  }) => void;
};

const initialDialogState: DialogState = {
  isOpen: false,
  title: "",
  description: "",
  content: null,
};

const useDialogState = create<DialogState & DialogActions>()((set) => ({
  ...initialDialogState,
  setOpen: (isOpen: boolean) => set({ isOpen }),
  setDialog: ({ title, description, content }) =>
    set({ title, description, content }),
}));

export default useDialogState;
