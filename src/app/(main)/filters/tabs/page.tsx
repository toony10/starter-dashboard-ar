"use client"

import { useSearchParams } from "next/navigation"
import { TabsFilter } from "@/components/shared/filters/TabsFilter"
import { MainH, SectionH } from "@/components/shared/text/Headings"
import { FILTER_URL_UPDATE_DELAY_MS } from "@/config/constants"

const statusOptions = [
  { label: "نشط", value: "active" },
  { label: "غير نشط", value: "inactive" },
  { label: "قيد الانتظار", value: "pending" },
  { label: "مؤرشف", value: "archived" },
]

const categoryOptions = [
  { label: "إلكترونيات", value: "electronics" },
  { label: "ملابس", value: "clothing" },
  { label: "كتب", value: "books" },
  { label: "المنزل والحديقة", value: "home-garden" },
]

const priorityOptions = [
  { label: "منخفض", value: "low" },
  { label: "متوسط", value: "medium" },
  { label: "مرتفع", value: "high" },
  { label: "عاجل", value: "urgent" },
]

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. اختر تبويباً أعلاه لتحديث الرابط.
      </p>
    )
  }

  return (
    <dl className="grid gap-2 text-sm">
      { entries.map(([key, value]) => (
        <div key={ key } className="flex gap-2">
          <dt className="font-medium text-muted-foreground">{ key }:</dt>
          <dd className="font-mono" dir="ltr">{ value }</dd>
        </div>
      )) }
    </dl>
  )
}

export default function TabsFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="فلتر التبويبات"
        description="فلاتر بتبويبات تزامن الخيار المحدد مع معاملات البحث في الرابط مع مؤشر انزلاقي سلس."
      />

      <div className="grid gap-8">
        <section className="flex flex-col gap-3">
          <SectionH
            title="الحالة"
            description='يكتب إلى معامل البحث "status". "الكل" يمسح الفلتر.'
          />
          <TabsFilter paramKey="status" options={ statusOptions } />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="الفئة"
            description='يكتب إلى معامل البحث "category".'
          />
          <TabsFilter paramKey="category" options={ categoryOptions } />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="الأولوية"
            description='يكتب إلى معامل البحث "priority".'
          />
          <TabsFilter paramKey="priority" options={ priorityOptions } />
        </section>
      </div>

      <section className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4">
        <SectionH
          title="معاملات البحث الحالية"
          description={`تحديثات الرابط تُؤجّل ${FILTER_URL_UPDATE_DELAY_MS} مللي ثانية بعد كل اختيار.`}
        />
        <SearchParamsPreview />
      </section>
    </div>
  )
}
