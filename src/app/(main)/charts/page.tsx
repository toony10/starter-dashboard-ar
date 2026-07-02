import Link from "next/link"
import { MainH } from "@/components/shared/text/Headings"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const chartPages = [
  {
    title: "لوحة التحليلات",
    description:
      "عرض تحليلات كامل مع رسوم خطية ومنطقة وأعمدة ودائرية وشعاعية ببيانات تجريبية.",
    href: "/charts/analytics",
  },
]

export default function ChartsPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="الرسوم البيانية"
        description="مكوّنات رسوم بيانية باستخدام Recharts وتنسيق shadcn/ui للوحات التحكم الحديثة."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        { chartPages.map((page) => (
          <Link key={ page.href } href={ page.href }>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{ page.title }</CardTitle>
                <CardDescription>{ page.description }</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        )) }
      </div>
    </div>
  )
}
