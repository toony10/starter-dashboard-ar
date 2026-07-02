"use client"

import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { useState } from "react"
import { DateInput } from "@/components/shared/forms/DateInput"
import { MainH, SectionH } from "@/components/shared/text/Headings"
import { Button } from "@/components/ui/button"

function ValuePreview({ value }: { value: Date | undefined }) {
  if (!value) {
    return (
      <p className="text-sm text-muted-foreground">لم يتم اختيار تاريخ.</p>
    )
  }

  return (
    <dl className="grid gap-2 text-sm">
      <div className="flex gap-2">
        <dt className="font-medium text-muted-foreground">محلي:</dt>
        <dd className="font-mono" dir="ltr">{ format(value, "PPP p", { locale: ar }) }</dd>
      </div>
      <div className="flex gap-2">
        <dt className="font-medium text-muted-foreground">ISO:</dt>
        <dd className="font-mono break-all" dir="ltr">{ value.toISOString() }</dd>
      </div>
    </dl>
  )
}

export default function DateInputPage() {
  const [controlled, setControlled] = useState<Date | undefined>()
  const [submitted, setSubmitted] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="إدخال التاريخ"
        description="منتقي تاريخ ووقت جاهز للنماذج مع تقويم وعناصر تحكم بالوقت ودعم اختياري لحقل مخفي."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <SectionH
            title="التاريخ والوقت"
            description="منتقي 12 ساعة افتراضي مع عناصر تحكم بالساعة والدقيقة وص/م."
          />
          <DateInput placeholder="جدولة حدث" />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="التاريخ فقط"
            description="اختيار من التقويم فقط بدون لوحة الوقت."
          />
          <DateInput withTime={ false } placeholder="اختر تاريخاً" />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="مع الثواني"
            description="ساعة 12 ساعة مع الثواني وص/م."
          />
          <DateInput
            showSeconds
            placeholder="اختر التاريخ والوقت"
          />
        </section>

        <section className="flex flex-col gap-3">
          <SectionH
            title="نطاق الحد الأدنى / الأقصى"
            description="يمكن اختيار التواريخ ضمن الـ 30 يوماً القادمة فقط."
          />
          <DateInput
            minDate={ new Date() }
            maxDate={ new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) }
            placeholder="خلال 30 يوماً"
          />
        </section>
      </div>

      <section className="flex flex-col gap-3">
        <SectionH
          title="مُتحكَّم به"
          description="يستخدم value و onChange للاحتفاظ بالاختيار في حالة React."
        />
        <DateInput
          value={ controlled }
          onChange={ setControlled }
          placeholder="منتقي متحكم به"
        />
        <div className="rounded-lg border bg-muted/30 p-4">
          <ValuePreview value={ controlled } />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <SectionH
          title="إرسال نموذج أصلي"
          description='يستخدم خاصية name الاختيارية لإرسال تاريخ ووقت ISO عبر حقل مخفي.'
        />
        <form
          className="flex flex-col gap-4 rounded-lg border bg-muted/30 p-4"
          onSubmit={ (event) => {
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            setSubmitted(String(data.get("eventAt") ?? ""))
          } }
        >
          <DateInput
            name="eventAt"
            required
            placeholder="تاريخ ووقت الحدث"
          />
          <Button type="submit" className="w-fit">
            إرسال النموذج
          </Button>
        </form>
        { submitted !== null ? (
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="mb-2 text-sm font-medium">القيمة المُرسَلة</p>
            <p className="font-mono text-sm break-all" dir="ltr">{ submitted || "(فارغ)" }</p>
          </div>
        ) : null }
      </section>
    </div>
  )
}
