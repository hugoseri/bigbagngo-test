import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/shop")
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return <div>Welcome to Sport Center.</div>;
}

export default App;
