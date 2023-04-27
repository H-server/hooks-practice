import { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  }
  return fireNotif;
}

function App() {
  const fireNotif = useNotification('hi', {
    body: "This is a notification.",
  });
  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={fireNotif}>alarm</button>
    </div>
  );
}

export default App;
