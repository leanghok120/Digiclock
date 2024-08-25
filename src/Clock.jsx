import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    const hours = addZero(time.getHours());
    const min = addZero(time.getMinutes());
    const sec = addZero(time.getSeconds());

    return `${hours}:${min}:${sec}`;
  }

  function addZero(num) {
    return (num < 12 ? "0" : "") + num;
  }

  return (
    <div className="mt-8">
      <h2 className="text-center text-5xl md:text-8xl lg:text-9xl font-black tracking-wider">
        {formatTime()}
      </h2>
    </div>
  );
}

export default Clock;
