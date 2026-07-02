"use client"

import { useSearchParams } from "next/navigation"
import { LimitFilter } from "@/components/shared/filters/LimitFilter"
import { Pagination } from "@/components/shared/filters/Pagination"
import { ResetFilters } from "@/components/shared/filters/ResetFilters"
import { SearchFilter } from "@/components/shared/filters/SearchFilter"
import { SelectFilter } from "@/components/shared/filters/SelectFilter"
import { MainH, SectionH } from "@/components/shared/text/Headings"

const statusOptions = [
  { label: "نشط", value: "active" },
  { label: "مسودة", value: "draft" },
  { label: "مؤرشف", value: "archived" },
]

const FILTER_KEYS = ["q", "status", "limit", "page"]

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. غيّر أحد الفلاتر أعلاه لتحديث الرابط.
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

export default function ResetFiltersPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="إعادة تعيين الفلاتر"
        description="امسح معاملات البحث المحددة من الرابط بإجراء واحد."
      />

      <section className="flex flex-col gap-4">
        <SectionH
          title="شريط الفلاتر"
          description='إعادة التعيين تزيل "q" و "status" و "limit" و "page" من الرابط.'
        />
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex min-w-48 flex-1 flex-col gap-2">
            <span className="text-sm font-medium">بحث</span>
            <SearchFilter placeholder="البحث في المنتجات..." />
          </div>
          <div className="flex min-w-40 flex-col gap-2">
            <span className="text-sm font-medium">الحالة</span>
            <SelectFilter
              paramKey="status"
              options={ statusOptions }
              placeholder="تصفية حسب الحالة"
            />
          </div>
          <div className="flex min-w-32 flex-col gap-2">
            <span className="text-sm font-medium">الحد</span>
            <LimitFilter />
          </div>
          <ResetFilters keys={ FILTER_KEYS } label="إعادة تعيين الفلاتر" />
        </div>
        <Pagination pages={ 10 } />
      </section>

      <section className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4">
        <SectionH
          title="معاملات البحث الحالية"
          description="إعادة التعيين معطّلة حتى يكون هناك معامل واحد على الأقل."
        />
        <SearchParamsPreview />
      </section>
    </div>
  )
}
