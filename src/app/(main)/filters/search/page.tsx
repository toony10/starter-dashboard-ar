"use client"

import { useSearchParams } from "next/navigation"
import { SearchFilter } from "@/components/shared/filters/SearchFilter"
import { MainH, SectionH } from "@/components/shared/text/Headings"
import { FILTER_URL_UPDATE_DELAY_MS } from "@/config/constants"

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. اكتب في حقل البحث أعلاه لتحديث الرابط.
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

export default function SearchFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="فلتر البحث"
        description="بحث نصي يزامن الاستعلام مع معاملات البحث في الرابط مع تحديثات مؤجّلة."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <SectionH
            title="الاستعلام الافتراضي"
            description='يكتب إلى معامل البحث "q" افتراضياً.'
          />
          <SearchFilter placeholder="البحث في المنتجات..." />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="مفتاح معامل مخصص"
            description='يكتب إلى معامل البحث "name" عند تعيين paramKey.'
          />
          <SearchFilter
            paramKey="name"
            placeholder="البحث بالاسم..."
          />
        </section>
      </div>

      <section className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4">
        <SectionH
          title="معاملات البحث الحالية"
          description={`تحديثات الرابط تُؤجّل ${FILTER_URL_UPDATE_DELAY_MS} مللي ثانية بعد كل ضغطة مفتاح.`}
        />
        <SearchParamsPreview />
      </section>
    </div>
  )
}
