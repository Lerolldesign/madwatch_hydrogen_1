import { useEffect, useRef } from "react";


export default function Clock () {
  return (
    <div>
      <iframe 
      className="w-full h-[50vh]"
      src="https://drivecapital.com"
      frameborder="0"
      allowfullscreen sandbox>
    </iframe>
    </div>
  );
}
