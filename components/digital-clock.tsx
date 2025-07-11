"use client";

import { useEffect, useState } from "react";

export const CurrentTime = (): React.JSX.Element => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const formatedHours = hours < 10 ? `0${hours}` : hours;
      const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      const time = `${formatedHours} : ${formatedMinutes} : ${formatedSeconds}`;

      setTime(time);

      // Format the date as yyyy-mm-dd
      const formatedDate = now.toISOString().split("T")[0];
      setDate(formatedDate);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="font-medium text-2xl">{time}</p>
      <p className="font-light text-sm">{date}</p>
    </div>
  );
};
