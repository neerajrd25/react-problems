import { useEffect, useRef, useState } from "react"

const PhoneNumberInput = ({ maxLength = 10 }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState('');
  const carretPositonRef = useRef<number>(0);

  // (123)456-7890 
  const handleChange = (event: { target: { value: string; selectionStart: any; }; }) => {
    const text: string = event.target.value;
    const selectionStart = event.target.selectionStart;

    const formattedValue: string[] = [];
    const numbers = text.replace(/[^0-9]/g, '');
    const size = numbers.length;

    if (size > maxLength) return;

    for (let i = 0; i < size; i++) {
      if (size > 3 && i === 0) {
        formattedValue.push('(')
      }
      formattedValue.push(numbers[i]);

      if (size > 3 && i === 2) {
        formattedValue.push(')')

      }

      if (size > 6 && i === 5) {
        formattedValue.push('-')

      }
    }

    const diff  =  formattedValue.length -  text.length ;
    if(selectionStart) carretPositonRef.current = selectionStart  + diff;
    
    setPhone(formattedValue.join(''));
  };


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(carretPositonRef.current, carretPositonRef.current)
    }
  }, [phone]);

  useEffect(()=>{
    console.log('2nd effect') // this will run only once 
  },[])
  useEffect(()=>{
    console.log('3nd effect') // this will everytime changes 
  })

  return (
    <>
      <input value={phone}  type="text" ref={inputRef} placeholder="Formatted Phone Number"
        onChange={handleChange}
      />
    </>
  )
}

const App = () => {

  return (
    <div>
      <PhoneNumberInput maxLength={10} />

    </div>
  )
}
export default App