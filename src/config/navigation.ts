import {
  LayoutDashboard,
  Settings,
  BarChart,
  type LucideIcon,
  PencilRuler,
  Filter,
  Table,
} from "lucide-react";

export type NavSubItem = {
  title: string;
  url: string;
};

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: NavSubItem[];
};

export type NavGroup = {
  label?: string;
  items: NavItem[];
};

export const navigation: NavGroup[] = [
  {
    items: [
      {
        title: "لوحة التحكم",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "النماذج",
        url: "/forms",
        icon: PencilRuler,
        items: [
          { title: "محرر النصوص", url: "/forms/rich-text" },
          { title: "رفع الصور", url: "/forms/image-uploader" },
          { title: "رفع الملفات", url: "/forms/file-uploader" },
        ],
      },
      {
        title: "الفلاتر",
        url: "/filters",
        icon: Filter,
        items: [
          { title: "ترقيم الصفحات", url: "/filters/pagination" },
          { title: "فلتر الاختيار", url: "/filters/select" },
          { title: "فلتر البحث", url: "/filters/search" },
          { title: "فلتر الحد", url: "/filters/limit" },
          { title: "إعادة تعيين الفلاتر", url: "/filters/reset" },
        ],
      },
      {
        title: "الرسوم البيانية",
        url: "/charts",
        icon: BarChart,
        items: [
          { title: "رسوم التحليلات", url: "/charts/analytics" },
        ],
      },
      {
        title: "الجدول",
        url: "/table",
        icon: Table,
      },
      {
        title: "الإعدادات",
        url: "/settings",
        icon: Settings,
        items: [
          { title: "ألوان الوضع الداكن", url: "/settings/dark-theme" },
        ],
      },
    ],
  },
];

export const user = {
  name: "انطون امير",
  email: "anton.amir@example.com",
  avatar: "",
};
