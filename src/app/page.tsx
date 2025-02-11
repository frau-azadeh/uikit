"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="flex flex-col gap-10  ">
        <Button variant="primary" size="sm" align="right" width="small">دکمه اصلی</Button>
        <Button variant="secondary" size="md" align="center" width="medium">تماس با ما</Button>
      </div>
      <div className="flex flex-col gap-4 p-10">
      {/* فیلد ساده */}
      <Input label="نام کاربری" placeholder="نام خود را وارد کنید" />

      {/* فیلد با آیکون */}
      <Input label="جستجو" placeholder="کلمه‌ای وارد کنید" icon="🔍" />

      {/* فیلد رمز عبور */}
      <Input label="رمز عبور" type="password" placeholder="******" />

      {/* فیلد غیرفعال */}
      <Input label="ایمیل" type="email" placeholder="example@email.com" disabled />

      {/* فیلد با پیام خطا */}
      <Input label="نام کاربری" placeholder="نام خود را وارد کنید" error="نام کاربری الزامی است" />

      {/* فیلد بزرگ‌تر با عرض کامل */}
      <Input label="پیام" placeholder="یک پیام بنویسید..." inputSize="lg" fullWidth />
    </div>
    </div>
  );
}
