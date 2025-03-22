import React, { useState, useEffect } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchId, setFetchId] = useState(0);

  // Component mount/unmount effect
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);

  // Effect for handling the data fetching
  useEffect(() => {
    if (fetchId === 0) return; // Don't fetch data on initial render

    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
          signal: controller.signal,
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name !== 'AbortError') console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      console.log('Cleanup: Abort fetch');
      controller.abort();
    };
  }, [fetchId]); // Runs only when fetchId changes so that unnecessary fetches are avoided

  return (
    <div className="flex flex-col items-center">      
      <button
        onClick={() => setFetchId((prev) => prev + 1)} // Increment fetchId to trigger fetch
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-8 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {data && (
        <div className="w-full bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">Fetched Data:</h3>
          <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded border">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FetchDataComponent;
