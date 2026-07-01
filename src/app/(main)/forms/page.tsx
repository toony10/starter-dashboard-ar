import Link from "next/link";
import { MainH } from "@/components/shared/text/Headings";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formPages = [
  {
    title: "محرر النصوص",
    description:
      "محرر نصوص متكامل مع التنسيق والقوائم والروابط وخيارات الألوان.",
    href: "/forms/rich-text",
  },
  {
    title: "رفع الصور",
    description:
      "اسحب وأفلت أو تصفّح لرفع الصور مع معاينات مصغّرة وحدود للحجم.",
    href: "/forms/image-uploader",
  },
  {
    title: "رفع الملفات",
    description:
      "ارفع المستندات وجداول البيانات والأرشيف مع التحقق وأيقونات أنواع الملفات.",
    href: "/forms/file-uploader",
  },
];

export default function FormsPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainH
        title="النماذج"
        description="مكوّنات نماذج قابلة لإعادة الاستخدام للنص الغني والصور ورفع الملفات."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        { formPages.map((page) => (
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
  );
}
