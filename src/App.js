import { useEffect, useState } from "react";
import { basUrl } from "./Apis/Api";
import PraySection from "./components/PraySection";
import { AnimatePresence } from "framer-motion";

function App() {
  const [currentDate, setCurrentDate] = useState(null);
  const [city, setCity] = useState("Cairo");
  const [prayerData, setPrayerData] = useState(null);
  const cities = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الإسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "أسوان", value: "Aswan" },
    { name: "الأقصر", value: "Luxor" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "الزقازيق", value: "Zagazig" },
    { name: "سوهاج", value: "Sohag" },
    { name: "الإسماعيلية", value: "Ismailia" },
    { name: "بني سويف", value: "BeniSuef" },
  ];

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    setCurrentDate(formattedDate);

    const fetchData = async () => {
      try {
        const res = await fetch(
          `${basUrl}/${formattedDate}?city=${city}&country=Egypt`
        );
        const data = await res.json();
        console.log(data.data.timings);
        setPrayerData(data.data.timings);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [city, currentDate]);

  return (
    <div
      className="App "
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className=" container py-8 px-7 rounded-lg "
        style={{
          backgroundColor: "#332a224e",
          width: "650px",
          backdropFilter: "blur(8px)",
          marginRight: "15%",
        }}
      >
        {/* Top Section */}
        <div
          className=" flex justify-between items-center"
          style={{
            paddingBottom: "40px",
            borderBottom: "1px solid #CCC",
            marginBottom: "40px",
          }}
        >
          <div className="city">
            <h3 className=" text-white" style={{ fontSize: "26px" }}>
              المدينة
            </h3>
            <select
              className="py-0.5 px-2.5 text-white mt-2.5"
              style={{
                width: "250px",
                borderRadius: "8px",
                outline: "none",
                backgroundColor: "#a54f3a",
                fontSize: "22px",
              }}
              defaultValue={"Cairo"}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              {cities.map((city, index) => {
                return (
                  <option key={index} value={city.value}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="date" style={{ width: "250px" }}>
            <h3 className=" text-white" style={{ fontSize: "26px" }}>
              التاريخ
            </h3>
            <h4 className=" text-white" style={{ fontSize: "26px" }}>
              {currentDate}
            </h4>
          </div>
        </div>
        <AnimatePresence>
          {prayerData && <PraySection prayerData={prayerData} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
