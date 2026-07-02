import { Pagination } from "@/components/shared/filters/Pagination"
import { ProductsTable, type Product } from "@/components/shared/table/ProductsTable"
import { MainH } from "@/components/shared/text/Headings"

const products: Product[] = [
  {
    id: "PRD-001",
    name: "سماعات لاسلكية",
    category: "إلكترونيات",
    price: 129.99,
    status: "active",
  },
  {
    id: "PRD-002",
    name: "كرسي مكتب مريح",
    category: "أثاث",
    price: 349.0,
    status: "active",
  },
  {
    id: "PRD-003",
    name: "زجاجة ماء ستانلس",
    category: "إكسسوارات",
    price: 24.5,
    status: "draft",
  },
  {
    id: "PRD-004",
    name: "لوحة مفاتيح ميكانيكية",
    category: "إلكترونيات",
    price: 89.99,
    status: "active",
  },
  {
    id: "PRD-005",
    name: "مصباح مكتب",
    category: "أثاث",
    price: 45.0,
    status: "archived",
  },
  {
    id: "PRD-006",
    name: "حامل لابتوب",
    category: "إكسسوارات",
    price: 59.99,
    status: "active",
  },
  {
    id: "PRD-007",
    name: "محول USB-C",
    category: "إلكترونيات",
    price: 39.99,
    status: "draft",
  },
  {
    id: "PRD-008",
    name: "ذراع شاشة",
    category: "أثاث",
    price: 79.0,
    status: "active",
  },
]

export default function TablePage() {
  return (
    <div className="flex flex-col gap-6">
      <MainH
        title="الجدول"
        description="مكوّن DataTable قابل لإعادة الاستخدام باستخدام TanStack Table و shadcn/ui."
      />
      <ProductsTable data={ products } />
      <Pagination pages={ 10 } />
    </div>
  )
}
