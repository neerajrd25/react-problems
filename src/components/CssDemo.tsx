
const allUsers = ['neeraj', 'suraj', 'rahul']
export const CssDemo = () => {
  return (<>
    <h2>CssDemo</h2>
    <p>List of users</p>
    <ul>
      {allUsers.map(u => (<li>{u}</li>))}
    </ul>
    <div>
      <p>top level p tag</p>
      <section>
        First Child div
        <p> First child's P tag</p>
      </section>
      <div>
        Second Child
        <h3>Second Child's h3 tag</h3>
        <h2>Second Child's h2 tag</h2>

        <h3>Second Child's h3  second tag</h3>
        <h3>Second Child's h3  second tag</h3>
        <h3>Second Child's h3  second tag</h3>
        <p>Some p tag in middle</p>
        <h3>Second Child's h3  second tag</h3>

      </div>
    </div>


  </>)
}



