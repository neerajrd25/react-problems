import { useEffect, useState } from 'react';
import category from '../data/category.json';

export const Debounce = () => {
  const [data, setData] = useState(category);
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(searchText);
      const filteredData = category.filter((c) => c.name.toLowerCase().includes(searchText.toLowerCase()));
      setData(filteredData);
    }, 2000)

    return () => clearTimeout(timeout)

  }, [searchText]);
  return (
    <>
      <h1>Debounce Example</h1>
      <h2>Search</h2>
      <input onChange={handleChange} />
      <h2>Data</h2>
      {data.map((d) => (<p key={d.id}>{d.name}</p>))}
    </>
  )
}