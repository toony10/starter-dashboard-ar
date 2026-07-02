"use client"

import { useSearchParams } from "next/navigation"
import { DateFilter } from "@/components/shared/filters/DateFilter"
import { ResetFilters } from "@/components/shared/filters/ResetFilters"
import { MainH, SectionH } from "@/components/shared/text/Headings"

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. اختر تاريخاً أعلاه لتحديث الرابط.
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

export default function DateFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="فلتر التاريخ"
        description="فلاتر اختيار التاريخ تزامن التواريخ المحددة مع معاملات البحث في الرابط بصيغة ISO."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <SectionH
            title="من"
            description='يكتب إلى معامل البحث "from" كتاريخ ووقت ISO (مثال: 2026-07-03T14:21:46.707Z).'
          />
          <DateFilter paramKey="from" placeholder="تاريخ البداية" />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="إلى"
            description='يكتب إلى معامل البحث "to" كتاريخ ووقت ISO (مثال: 2026-07-03T14:21:46.707Z).'
          />
          <DateFilter paramKey="to" placeholder="تاريخ النهاية" />
        </section>
      </div>

      <div className="flex items-center gap-3">
        <ResetFilters keys={ ["from", "to"] } />
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
