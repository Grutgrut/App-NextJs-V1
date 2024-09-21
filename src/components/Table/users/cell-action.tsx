"use client";
import { useState } from "react";
import { useRouter } from "@/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Pencil, Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";

import { Row } from "@tanstack/react-table";
import { userSchema } from "./data/schema";

import { deleteUserbyId } from '@/lib/datas'

interface CellActionProps<TData> {
  row: Row<TData>
}

export function CellAction<TData>({
  row,
}: CellActionProps<TData>) {
  const user = userSchema.parse(row.original)

  const router = useRouter();
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /*   const { refetch } = api.employee.getAll.useQuery(undefined, {
      enabled: false,
    });
  
    const { mutate: deleteEmployee, isLoading: deleteEmployeeIsLoading } =
      api.employee.delete.useMutation({
        onError: (err) => {
          toast.error(err.message);
        },
        onSuccess: async (data) => {
          toast.success("Delete Employee success");
          await refetch();
        },
      }); */

  return (
    <div className="flex justify-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => {
                router.push({
                  pathname: '/dashboard/produits/[id]',
                  params: { id: user.id }
                });
                /*  router.push(`/dashboard1/products/${user.id}`); */
              }}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update employee</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => {
                setAlertModalOpen(true);
              }}
            >
              <Trash2 className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete employee</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={user.nom}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={async () => {
          setIsLoading(true)
          await deleteUserbyId(user.id)
          setIsLoading(false)
          setAlertModalOpen(false)
        }

        }
        loading={isLoading}
      />
    </div>
  );
}
