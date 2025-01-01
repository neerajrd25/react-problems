import { useEffect, useState } from "react";
import { Transaction } from "../application.types";
import axios from "axios";
import { BASE_URL } from "../services/apiconfig";

const RenderList = ({ list }: TransactionProps) => {
  if (!list || list.length === 0) return (<p>No Transactions </p>);
  // console.log(list)
  return (
    <>
      {list.map((data: Transaction, index: number) => (
        <div key={index}>
          <h2>
          Category : {data.category.name} ({data.amount})
          </h2>
          <span>{data.description} </span>
        </div>
        ))}
    </>
  )
}

type TransactionProps = {
  list: Transaction[]
}

export const Transactions = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(BASE_URL).then((res) => setData(res.data))
  }, []);

  return (<RenderList list={data} />);

}