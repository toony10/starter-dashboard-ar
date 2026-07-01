import { Pagination } from "@/components/shared/filters/Pagination";
import { MainH } from "@/components/shared/text/Headings";

export default function PaginationPage() {
    return (
        <div className="flex flex-col gap-6">
            <MainH
                title="ترقيم الصفحات"
                description="ترقيم الصفحات للتطبيق."
            />
            <Pagination />
        </div>
    )
}
