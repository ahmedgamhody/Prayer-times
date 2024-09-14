import { motion } from "framer-motion";
export default function Prayer({ prayerName, prayertime }) {
  return (
    <motion.div
      className="flex justify-between py-3 px-4 rounded-md text-white cursor-pointer "
      style={{ backgroundColor: "#865240", fontSize: "23px" }}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
    >
      <motion.h3
        key={prayerName}
        whileHover={{ scale: 1.04 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {prayerName}
      </motion.h3>
      <motion.h3
        key={prayertime}
        whileHover={{ scale: 1.04 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {prayertime}
      </motion.h3>
    </motion.div>
  );
}
