import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const useOffline = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(() => {
    const handleConnectionChange = () => {
      const online = navigator.onLine;
      setIsOffline(!online);

      Swal.fire({
        title: online ? "You're Back Online!" : "Oops, No Internet!",
        text: online
          ? "Great! You have reconnected."
          : "Check your connection.",
        icon: online ? "success" : "warning",
        confirmButtonText: online ? "Awesome!" : "Okay",
      });
    };

    window.addEventListener("offline", handleConnectionChange);
    window.addEventListener("online", handleConnectionChange);

    return () => {
      window.removeEventListener("offline", handleConnectionChange);
      window.removeEventListener("online", handleConnectionChange);
    };
  }, []);

  return isOffline;
};

export default useOffline;
