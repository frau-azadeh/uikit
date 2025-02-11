"use client";

import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      {/* دکمه‌ها زیر هم هستند ولی فاصله دارند */}
      <div className="flex flex-col gap-10  ">
        <Button variant="primary" size="sm" align="right">دکمه اصلی</Button>
        <Button variant="secondary" size="md" align="center">تماس با ما</Button>
      </div>
    </div>
  );
}
