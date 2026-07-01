import {
  LayoutDashboard,
  Settings,
  BarChart,
  type LucideIcon,
  PencilRuler,
  Filter,
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
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "المرفقات (Forms)",
        url: "/forms",
        icon: PencilRuler,
        items: [
          { title: "محرر النصوص", url: "/forms/rich-text" },
          { title: "مرفق الصور", url: "/forms/image-uploader" },
          { title: "مرفق الملفات", url: "/forms/file-uploader" },
        ],
      },
      {
        title: "الفلاتر (Filters)",
        url: "/filters",
        icon: Filter,
        items: [
          { title: "ترقيم الصفحات", url: "/filters/pagination" },
          { title: "فلتر الاختيار", url: "/filters/select" },
        ],
      },
      {
        title: "التحليلات (Analytics)",
        url: "/dashboard/analytics",
        icon: BarChart,
      },
      {
        title: "الإعدادات (Settings)",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

export const user = {
  name: "انطون امير",
  email: "anton.amir@example.com",
  avatar: "",
};
