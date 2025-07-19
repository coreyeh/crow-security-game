import { Toast, Toaster } from "@ark-ui/react";
import { toaster, toastPalette } from "@/widgets/toast/consts";

import { FaX } from "react-icons/fa6";

export const GenericToaster = () => {
  return (
    <Toaster toaster={toaster}>
      {(toast) => {
        const colorClass = toastPalette[toast.type ?? "loading"];

        return (
          <Toast.Root key={toast.id} className={`w-96 rounded-md outline-2 ${colorClass} shadow-md shadow-darkest`}>
            <div className="flex items-center justify-between p-4">
              <div className="">
                <Toast.Title className="font-header font-medium text-lg">{toast.title}</Toast.Title>
                <Toast.Description className="text-sm text-light">{toast.description}</Toast.Description>
              </div>
              <Toast.CloseTrigger className="cursor-pointer hover:opacity-70">
                <FaX className="text-sm text-light" />
              </Toast.CloseTrigger>
            </div>
          </Toast.Root>
        );
      }}
    </Toaster>
  );
}