import { createContext, memo, useContext, useEffect, useState } from "react"

export const ContextDemo = ({ }) => {
  const date = new Date()

  const [state, setState] = useState({
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      setState({
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [])

  return (<>
    <h2>
      Context Demo
    </h2>
    <DateTimeContext.Provider value={state} >
      <DateComponent />
      <TimeComponent />
    </DateTimeContext.Provider>
    <DateTimeComponent />

  </>)
}


const DateTimeComponent = () => {
  const value = useContext(DateTimeContext);
  return (<p>Outside Provider : I will render default past Date time {value}</p>)
}
const DisplayDate = ({ data }: string) => {
  console.log('Value rec', data);
  return <>{data}</>
}

const DateComponent = () => {
  const { date } = useContext(DateTimeContext);
  return (<p> Current Date is :  <DisplayDate data={date} /> </p>)

}
const TimeComponent = () => {
  const { time } = useContext(DateTimeContext);
  return (<>
    {/* <p> I will be updated  {Math.random() + Math.random()}</p> */}
    <p>  Current Time is : {time}</p>
  </>)
}

const PASTDATE = new Date(2024, 5, 1)
const DateTimeContext = createContext(PASTDATE.toLocaleString());