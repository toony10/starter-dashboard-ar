"use client"

import { useSearchParams } from "next/navigation"
import { SelectFilter } from "@/components/shared/filters/SelectFilter"
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

const sortOptions = [
  { label: "الأحدث أولاً", value: "newest" },
  { label: "الأقدم أولاً", value: "oldest" },
  { label: "الاسم أ–ي", value: "name-asc" },
  { label: "الاسم ي–أ", value: "name-desc" },
]

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. اختر قيمة أعلاه لتحديث الرابط.
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

export default function SelectFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="فلتر الاختيار"
        description="فلاتر منسدلة تزامن القيم المحددة مع معاملات البحث في الرابط مع تحديثات مؤجّلة."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <SectionH
            title="الحالة"
            description='يكتب إلى معامل البحث "status".'
          />
          <SelectFilter
            paramKey="status"
            options={ statusOptions }
            placeholder="تصفية حسب الحالة"
          />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="الفئة"
            description='يكتب إلى معامل البحث "category".'
          />
          <SelectFilter
            paramKey="category"
            options={ categoryOptions }
            placeholder="تصفية حسب الفئة"
          />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="ترتيب الفرز"
            description='يكتب إلى معامل البحث "sort".'
          />
          <SelectFilter
            paramKey="sort"
            options={ sortOptions }
            placeholder="الفرز حسب"
          />
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
