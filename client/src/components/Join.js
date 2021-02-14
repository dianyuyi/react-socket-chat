import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <section>
      <div>
        <h1>Join</h1>
      </div>
      <div>
        <input type="text" placeholder="" onChange={} />
      </div>
      <Link>
        <button type="submit"> Sign In</button>
      </Link>
    </section>
  );
};

export default Join;
