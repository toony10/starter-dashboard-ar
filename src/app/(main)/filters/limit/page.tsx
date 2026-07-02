"use client"

import { useSearchParams } from "next/navigation"
import { LimitFilter } from "@/components/shared/filters/LimitFilter"
import { MainH, SectionH } from "@/components/shared/text/Headings"

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. اختر حداً أعلاه لتحديث الرابط.
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

export default function LimitFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="فلتر الحد"
        description="اختر عدد الصفوف المعروضة في الصفحة، متزامن مع معاملات البحث في الرابط مع تحديثات مؤجّلة."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <SectionH
            title="الحد الافتراضي"
            description='يكتب إلى معامل البحث "limit" افتراضياً.'
          />
          <LimitFilter />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="خيارات مخصصة"
            description='يكتب إلى معامل البحث "perPage" مع مجموعة قيم مخصصة.'
          />
          <LimitFilter
            paramKey="perPage"
            options={ [5, 15, 30, 60] }
            defaultLimit={ 15 }
          />
        </section>
      </div>

      <section className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4">
        <SectionH
          title="معاملات البحث الحالية"
          description="تحديثات الرابط تُؤجّل 600 مللي ثانية بعد كل اختيار."
        />
        <SearchParamsPreview />
      </section>
    </div>
  )
}
