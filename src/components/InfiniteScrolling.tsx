import axios from "axios";
import { useEffect, useState } from "react";
import { FixedSizeList as List } from 'react-window';

const URL = "http://universities.hipolabs.com/search?country=United+States";


const Row = (props) => {
  const { data, index, style }  = props;
  // console.log(props);
  const item = data[index];
  if (!item) return (<li>No item </li>)
  return (
    <li style={style}>  {index} {item.name}</li>
  );
}

export const InfiniteScrolling = () => {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data))
  }, [])

  if (!data) return (<p>No university data found</p>);

  return (<>
    <><div>
      <h2>
        Inifinite Scrolling
      </h2>
      <div>
        {/* <ol>
          {data.map((u:any, index ) => (<Row key={index} data={u}/>))}
        </ol> */}
        <List
          height={600}
          itemCount={data.length}
          itemSize={40}
          width={500}
          itemData={data}

        >
          {Row}
        </List>
      </div>
    </div></>
  </>)
}