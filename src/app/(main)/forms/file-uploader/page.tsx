import { FileUploader } from "@/components/shared/forms/FileUploader";
import { MainH } from "@/components/shared/text/Headings";

export default async function FileUploaderPage() {
  return (
    <div className="flex flex-col gap-6">
      <MainH
        title="رفع الملفات"
        description="ارفع المستندات وجداول البيانات والأرشيف مع التحقق وأيقونات أنواع الملفات."
      />
      <FileUploader />
    </div>
  );
}
