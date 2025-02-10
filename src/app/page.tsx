"use client"

import { Button } from "@/components/ui/Button"
import { ShoppingCart } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <Button variant="primary" size="md">دکمه اصلی</Button>
      <Button variant="secondary" size="lg" icon={<ShoppingCart />}>افزودن به سبد</Button>
      <Button variant="outline" size="sm" isLoading>در حال پردازش...</Button>
      <Button variant="primary" ctaText="بیشتر بدانید" ctaVariant="secondary" onCtaClick={() => alert("CTA کلیک شد!")}>اطلاعات بیشتر</Button>

    </div>
  );
}
