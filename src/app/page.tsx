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
        <Input label="نام کاربردی" placeholder="نام خود را وارد کنید"/>
        <Input label="جستجو" placeholder="جستحو ... " icon="🔍"/>
        <Input label="رمز عبور" type="password" placeholder="****"/>
        <Input label="ایمیل" type="email" placeholder="example@gmail.com" disabled/>
        <Input label="نام کاربری" placeholder="نام خود را وارد کنید" error="نام کاربری الزامی است"/>
        <Input label="پیام" placeholder="یک پیام بنویسید" inputSize="lg" fullWidth />
      </div>
    </div>
  );
}
