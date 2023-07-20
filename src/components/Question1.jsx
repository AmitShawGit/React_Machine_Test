import React, { useState, useEffect } from 'react';

//Create a React component that displays a list of items fetched from an API endpoint. Each item should be rendered as a separate component.

const Question1 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((elem) => (
        <Item key={elem.id} title={elem.name} description={elem.email} />
      ))}
    </div>
  );
};

const Item = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Question1;

