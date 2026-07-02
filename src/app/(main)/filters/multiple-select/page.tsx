"use client"

import { useSearchParams } from "next/navigation"
import { MultipleSelectFilter } from "@/components/shared/filters/MultipleSelectFilter"
import { MainH, SectionH } from "@/components/shared/text/Headings"

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

const tagOptions = [
  { label: "مميز", value: "featured" },
  { label: "في التخفيض", value: "on-sale" },
  { label: "وصل حديثاً", value: "new" },
  { label: "محدود", value: "limited" },
]

function SearchParamsPreview() {
  const searchParams = useSearchParams()
  const entries = Array.from(searchParams.entries())

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        لم يتم تعيين معاملات بحث بعد. اختر قيماً أعلاه لتحديث الرابط.
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

export default function MultipleSelectFilterPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="فلتر الاختيار المتعدد"
        description="فلاتر منسدلة تزامن عدة قيم محددة مع معاملات البحث في الرابط كقوائم مفصولة بفواصل."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <SectionH
            title="الحالة"
            description='يكتب إلى معامل البحث "status"، مثال: status=active,pending.'
          />
          <MultipleSelectFilter
            paramKey="status"
            options={ statusOptions }
            placeholder="تصفية حسب الحالة"
          />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="الفئة"
            description='يكتب إلى معامل البحث "category"، مثال: category=electronics,books.'
          />
          <MultipleSelectFilter
            paramKey="category"
            options={ categoryOptions }
            placeholder="تصفية حسب الفئة"
          />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="الوسوم"
            description='يكتب إلى معامل البحث "tags"، مثال: tags=featured,new,on-sale.'
          />
          <MultipleSelectFilter
            paramKey="tags"
            options={ tagOptions }
            placeholder="تصفية حسب الوسوم"
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
