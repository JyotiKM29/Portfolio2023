import { useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const response = await fetch('/api/visitors');
      const data = await response.json();
      setCount(data.count);
    };

    fetchCount();
  }, []);

  return (
    <center>
    <div>
      <h1>Welcome to My Website</h1>
      <p>Visitors count: {count}</p>
    </div>
    </center>
  );
};

export default Home;
