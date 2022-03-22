import { useState } from "react";

export const Home = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.currentTarget.value);
  };

  console.log(value);
  return (
    <div>
      Home component
      <br />
      <input value={value} onChange={handleInput} />
    </div>
  );
};
