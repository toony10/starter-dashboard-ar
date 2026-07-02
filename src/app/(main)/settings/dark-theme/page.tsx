import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { DarkBackgroundPicker } from "@/components/settings/DarkBackgroundPicker"
import { MainH } from "@/components/shared/text/Headings"
import { Button } from "@/components/ui/button"

export default function DarkThemeSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <Button variant="ghost" size="sm" className="self-start" asChild>
          <Link href="/settings">
            <ArrowRight className="size-4" />
            العودة إلى الإعدادات
          </Link>
        </Button>
        <MainH
          title="ألوان الوضع الداكن"
          description="اختر ألوان الخلفية والبطاقات في الوضع الداكن لواجهة لوحة التحكم والشريط الجانبي."
        />
      </div>
      <DarkBackgroundPicker />
    </div>
  )
}
