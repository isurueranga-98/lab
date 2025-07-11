"use client";
import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSheetState, useDialogState } from "@/store";

type PageContainerProps = { title?: string; children: ReactNode };

export const PageContainer = ({
  title: pageTitle,
  children,
}: PageContainerProps): JSX.Element => {
  const {
    isOpen: isSheetOpen,
    setOpen: setSheetOpen,
    title: sheetTitle,
    content: sheetContent,
    description: sheetDescription,
  } = useSheetState((state) => state);

  const {
    isOpen: isDialogOpen,
    setOpen: setDialogOpen,
    title: dialogTitle,
    content: dialogContent,
    description: dialogDescription,
  } = useDialogState((state) => state);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{sheetTitle}</SheetTitle>
            <SheetDescription className="py-4">
              {sheetDescription}
            </SheetDescription>
          </SheetHeader>
          {sheetContent}
        </SheetContent>
      </Sheet>

      {/* dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <div className="max-h-[600px] w-[1000px] overflow-y-scroll">
            {dialogContent}
          </div>
        </DialogContent>
      </Dialog>

      {/* page */}
      <section className="w-[1200px]">
        {/* title */}
        {pageTitle && (
          <h1 className="text-3xl font-bold text-gray-800">{pageTitle}</h1>
        )}
        {/* content */}
        <div className="">{children}</div>
      </section>
    </div>
  );
};
