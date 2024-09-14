import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className=" flex justify-center">
      <InfinitySpin
        visible={true}
        width="200"
        color="#b3533b"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
