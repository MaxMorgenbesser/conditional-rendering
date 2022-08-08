import { useState } from "react";
import Loading from "./Loading";
import "./App.css";
import Loaded from "./Loaded";

function App() {
  const [username, setUsername] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [objectExample, setObjectExample] = useState({
    name: "Name of object",
  }); //dont need this
  const ternary = isLoaded ? "YES" : "NO";

  return (
    <div className="App">
      <h1>username is: {username ? username : "Guest"}</h1>
      <h1>username is: {username || "Guest"}</h1>
      <h1>{isLoaded ? "YES" : "NO"}</h1>
      <h1>
        {isLoaded && (
          <>
            This is really loaded 
            <Loaded />
          </>
        )}
      </h1>
      <h2>{objectExample.name}</h2>
      {isLoaded ? <Loaded /> : <Loading />}
      <h2>isLoaded = {String(isLoaded)}</h2>
      {/* <h1>{isLoaded ? "YES" : "NO"}</h1>
      <h2>{objectExample.name}</h2> */}
      <button
        onClick={() => {
          setIsLoaded(!isLoaded);
        }}
      >
        Change Loaded
      </button>
    </div>
  );
}

export default App;
