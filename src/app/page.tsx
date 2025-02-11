"use client"

import { Button } from "@/components/ui/Button"


export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <Button variant="primary" size="sm">دکمه اصلی</Button>
      <Button variant="secondary" size="md">تماس با ما</Button>
      
    </div>
  );
}
