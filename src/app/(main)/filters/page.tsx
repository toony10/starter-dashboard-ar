import Link from "next/link";
import { MainH } from "@/components/shared/text/Headings";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const filterPages = [
    {
        title: "ترقيم الصفحات",
        description:
            "ترقيم الصفحات للتطبيق.",
        href: "/filters/pagination",
    },
    {
        title: "فلتر الاختيار",
        description:
            "فلتر منسدل يزامن القيمة المحددة مع معاملات البحث في الرابط.",
        href: "/filters/select",
    },
];

export default function FiltersPage() {
    return (
        <div className="flex flex-col gap-8">
            <MainH
                title="الفلاتر"
                description="فلاتر للتطبيق."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                { filterPages.map((page) => (
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
