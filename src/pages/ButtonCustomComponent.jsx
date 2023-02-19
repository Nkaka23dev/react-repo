import React from "react";
import Button from "../components/Button";

export default function ButtonCustomComponent() {
  return (
    <section className="h-screen grid">
      <div className="m-auto space-x-3">
        <Button text="Button 1" message={1}/>
        <Button text="Button 2" message={2}/>
        <Button text="Button 3" message={3}/>
      </div>
    </section>
  );
}
