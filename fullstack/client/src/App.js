import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.01:5000")
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((userData) => setClientData(userData))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);
  if(isLoading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <h2>{clientData.name}</h2>
          <h2>{clientData.isWeb ? 'Web': "Not web"}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
