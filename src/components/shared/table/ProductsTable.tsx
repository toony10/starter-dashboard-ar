"use client"

import { type ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/components/shared/table/DataTable"
import { Button } from "@/components/ui/button"
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react"

export type Product = {
  id: string
  name: string
  category: string
  price: number
  status: "active" | "draft" | "archived"
}

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "المعرف",
  },
  {
    accessorKey: "name",
    header: "المنتج",
  },
  {
    accessorKey: "category",
    header: "الفئة",
  },
  {
    accessorKey: "price",
    header: "السعر",
    cell: ({ row }) => {
      const price = row.getValue<number>("price")
      return (
        <span dir="ltr">
          { new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price) }
        </span>
      )
    },
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: ({ row }) => {
      const status = row.getValue<Product["status"]>("status")
      const labels: Record<Product["status"], string> = {
        active: "نشط",
        draft: "مسودة",
        archived: "مؤرشف",
      }
      return <span>{ labels[status] }</span>
    },
  },
  {
    id: "actions",
    header: "",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <EditIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <TrashIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <EyeIcon className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
]

interface ProductsTableProps {
  data: Product[]
  isLoading?: boolean
}

export function ProductsTable({ data, isLoading }: ProductsTableProps) {
  return <DataTable columns={ columns } data={ data } isLoading={ isLoading } />
}
