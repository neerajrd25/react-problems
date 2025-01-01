import { useEffect, useRef, useState } from 'react';
import category from '../data/category.json';
import useDebounce from '../hooks/debounce.hook';

export const Debounce = () => {
  const [data, setData] = useState(category);
  const [searchText, setSearchText] = useState('');

  const searchQuery = useDebounce(searchText, 2000)


  const handleChange = (e: { target: { value: string; }; }) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const filteredData = category.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setData(filteredData);
  }, [searchQuery]);
  
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