import React from "react";
import { TypeAnimation } from "react-type-animation";

const Updates = () => {
  const updates = [
    "انتشارت سگ آبی به بُو پیوست",
    3000,
    "مجموعه‌ی 5 جلدی بقاء در دانشگاه آزاد",
    4000,
  ];
  return (
    <div className="flex">
      <h6 className="me-2 bg-rose-500 rounded-full">آپدیت</h6>
      <p className="text-base max-sm:text-sm">
        <TypeAnimation
          sequence={updates}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />
      </p>
    </div>
  );
};

export default Updates;
