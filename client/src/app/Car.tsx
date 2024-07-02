import React from "react";
import Image from "next/image";
import "./styles/Car.css";

export default function CarElement({
  nameOfImage,
  car,
}: {
  nameOfImage: string;
  car: Car;
}) {
  return (
    <div className="car">
      <Image
        className="image"
        src={`/${nameOfImage}`}
        width={240}
        height={160}
        alt={nameOfImage}
      />
    </div>
  );
}
