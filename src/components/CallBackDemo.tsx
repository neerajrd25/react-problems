import { memo, useCallback, useState } from "react"

const allUsers = ['neeraj', 'niraj', 'suraj', 'sooraj', 'subham', 'sookomar'];
function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return [...array];
}

export const CallBackDemo = () => {

  const [users, setUsers] = useState(allUsers);

  const handleTextChange = useCallback((e: { target: { value: string; }; }) => {
    let { target: { value } } = e;
    const filteredUsers = allUsers.filter(u => u.startsWith(value));

    setUsers(filteredUsers);
  }, []);

  const shuffleData = () => {
    setUsers(shuffle(users))
  }

  return (<>
    <h2> Call Back Demo</h2>
    <Search handleTextChange={handleTextChange} />
    <br />
    <button onClick={shuffleData}>Shuffle</button>

    <h3>Users</h3>
    <ol style={{ textAlign: "center" }}>
      {users.map(u => (<li key={u}>{u}</li>))}
    </ol>
  </>)
}



const Search = memo(({ handleTextChange }) => {
  return (<>
    <input type="text" onChange={(e) => handleTextChange(e)} name="search" autoComplete="off" />
    {Math.random()}
  </>)
});