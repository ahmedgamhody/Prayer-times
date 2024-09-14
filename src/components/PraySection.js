import React from "react";
import { motion } from "framer-motion";
import Prayer from "./Prayer";

export default function PraySection({ prayerData }) {
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const suffix = h >= 12 ? "PM" : "AM";
    h = ((h + 11) % 12) + 1;
    return `${h.toString().padStart(2, "0")}:${minute} ${suffix}`;
  };

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }} // الحالة الابتدائية
      animate={{ opacity: 1, y: 0 }} // الحالة النهائية
      exit={{ opacity: 0, y: -20 }} // الحالة عند الإزالة
      transition={{ duration: 0.5, ease: "easeInOut" }} // إعدادات الانتقال
      key={prayerData}
    >
      <Prayer
        prayerName={"الفجر"}
        prayertime={convertTo12HourFormat(prayerData.Fajr)}
      />
      <Prayer
        prayerName={"الشروق"}
        prayertime={convertTo12HourFormat(prayerData.Sunrise)}
      />
      <Prayer
        prayerName={"الظهر"}
        prayertime={convertTo12HourFormat(prayerData.Dhuhr)}
      />
      <Prayer
        prayerName={"العصر"}
        prayertime={convertTo12HourFormat(prayerData.Asr)}
      />
      <Prayer
        prayerName={"المغرب"}
        prayertime={convertTo12HourFormat(prayerData.Maghrib)}
      />
      <Prayer
        prayerName={"العشاء"}
        prayertime={convertTo12HourFormat(prayerData.Isha)}
      />
    </motion.div>
  );
}
