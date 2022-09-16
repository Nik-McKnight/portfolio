import React from "react";
import { useEffect } from "react";
import "../style/App.css";
import "../style/Content.css";

export default function Home() {
  useEffect(() => {
    window.history.replaceState(null, "", "/");
  }, []);

  return (
    <div class="content">
      <div>Home</div>
    </div>
  );
}
