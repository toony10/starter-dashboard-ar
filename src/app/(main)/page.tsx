import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { DashboardIntroFilters } from "@/components/shared/filters/DashboardIntroFilters"
import { AnalyticsKpiCards } from "@/components/shared/charts/AnalyticsKpiCards"
import { RevenueLineChart } from "@/components/shared/charts/RevenueLineChart"
import { VisitorAreaChart } from "@/components/shared/charts/VisitorAreaChart"
import { ProductsTable, type Product } from "@/components/shared/table/ProductsTable"
import { MainH, SectionH } from "@/components/shared/text/Headings"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { navigation, type NavItem } from "@/config/navigation"

const recentProducts: Product[] = [
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
]

const moduleMeta: Record<
  string,
  { description: string; highlights: string[] }
> = {
  "النماذج": {
    description:
      "تحرير نصوص غنية، رفع صور، ورفع ملفات مع التحقق والمعاينات.",
    highlights: ["محرر النصوص", "رفع الصور", "رفع الملفات"],
  },
  "الفلاتر": {
    description:
      "فلاتر متزامنة مع الرابط للبحث والترقيم والاختيار والحد وإعادة التعيين.",
    highlights: ["بحث", "ترقيم", "اختيار", "حد", "إعادة تعيين"],
  },
  "الرسوم البيانية": {
    description:
      "رسوم خطية ومنطقة وأعمدة ودائرية وشعاعية باستخدام Recharts وتنسيق shadcn.",
    highlights: ["بطاقات KPI", "خط ومنطقة", "أعمدة ودائرية", "شعاعي"],
  },
  "الجدول": {
    description:
      "جداول بيانات قابلة للفرز مبنية بـ TanStack Table ومكوّنات shadcn/ui.",
    highlights: ["فرز الأعمدة", "إجراءات الصف", "حالات التحميل"],
  },
  "الإعدادات": {
    description:
      "تخصيص مظهر لوحة التحكم، بما في ذلك خلفيات الوضع الداكن.",
    highlights: ["قوالب الوضع الداكن", "ألوان الشريط الجانبي"],
  },
}

function getFeatureModules(): NavItem[] {
  return navigation.flatMap((group) =>
    group.items.filter((item) => item.url !== "/"),
  )
}

export default function DashboardPage() {
  const featureModules = getFeatureModules()

  return (
    <div className="flex flex-col gap-10">
      <MainH
        title="لوحة التحكم"
        description="واجهة إدارية جاهزة للإنتاج مع رسوم بيانية وجداول وفلاتر ونماذج وإعدادات — استكشف كل وحدة أدناه."
      />

      <section className="flex flex-col gap-4">
        <AnalyticsKpiCards />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionH
            title="نظرة عامة على التحليلات"
            description="مكوّنات الرسوم البيانية الحية من وحدة التحليلات."
          />
          <Button variant="outline" size="sm" asChild>
            <Link href="/charts/analytics">
              فتح التحليلات
              <ArrowLeft />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <RevenueLineChart />
          <VisitorAreaChart />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionH
          title="استكشاف الوحدات"
          description="انتقل إلى كل منطقة ميزات في لوحة التحكم."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          { featureModules.map((module) => {
            const meta = moduleMeta[module.title]
            const Icon = module.icon

            return (
              <Link key={ module.url } href={ module.url }>
                <Card className="group h-full transition-all hover:border-primary/30 hover:bg-muted/40 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{ module.title }</CardTitle>
                    <CardDescription>
                      { meta?.description ?? `استكشف ${ module.title }.` }
                    </CardDescription>
                    { meta?.highlights ? (
                      <p className="pt-1 text-xs text-muted-foreground">
                        { meta.highlights.join(" · ") }
                      </p>
                    ) : null }
                  </CardHeader>
                </Card>
              </Link>
            )
          }) }
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionH
            title="المنتجات الأخيرة"
            description="جدول بيانات مع الفرز والتنسيق وإجراءات الصف."
          />
          <Button variant="outline" size="sm" asChild>
            <Link href="/table">
              عرض الجدول الكامل
              <ArrowLeft />
            </Link>
          </Button>
        </div>
        <ProductsTable data={ recentProducts } />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionH
            title="مجموعة الفلاتر"
            description="فلاتر قابلة للتركيب تزامن الحالة مع الرابط — جرّبها هنا."
          />
          <Button variant="outline" size="sm" asChild>
            <Link href="/filters">
              تصفح كل الفلاتر
              <ArrowLeft />
            </Link>
          </Button>
        </div>
        <Card>
          <CardHeader className="gap-4">
            <CardTitle className="text-base">عرض سريع للفلاتر</CardTitle>
            <CardDescription>
              عناصر البحث والحد تحدّث رابط الصفحة. إعادة التعيين تمسح المعاملات النشطة.
            </CardDescription>
            <DashboardIntroFilters />
          </CardHeader>
        </Card>
      </section>
    </div>
  )
}
