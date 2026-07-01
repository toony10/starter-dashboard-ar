import { ImageUploader } from "@/components/shared/forms/ImageUploader";
import { MainH } from "@/components/shared/text/Headings";

export default function ImageUploaderPage() {
  return (
    <div className="flex flex-col gap-6">
      <MainH
        title="رفع الصور"
        description="اسحب وأفلت أو تصفّح لرفع الصور مع معاينات مصغّرة وحدود للحجم."
      />
      <ImageUploader />
    </div>
  );
}
