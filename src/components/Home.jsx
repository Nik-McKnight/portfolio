import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.replaceState(null, "", "/");
  }, []);

  return (
    <>
      <div>Home</div>
    </>
  );
}
