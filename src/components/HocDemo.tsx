
// TODO: fix typescript issues 
export const HocDemo = () => {
  return (
    <>
      <div>
        <HOC style={{ backgroundColor: 'green' }} />
        <HOC style={{}} />
        <StyledHOC data={'This is HOC P'} clickable={()=> alert('See I am clickabled')}/>
        <StyledDiv text={'This is HOC DIV & I am Not Clickable'}/>
      </div>
    </>
  )
}

const HOC = ({ style, data, clickable }) => {
  return (
    <><p style={style} onClick={clickable}>
    {data}
    </p></>
  )
}

const HocDiv = ({ style, text }) => {
  return (<> <div style={style}>{text}</div></>)
}

function withStyles(Component: any) {
  return (props) => {
    const style = { padding: '1rem', margin: '1rem', color: 'yellow', backgroundColor: 'gray' }
    return <Component style={style} {...props} />
  }
}

const StyledHOC = withStyles(HOC);
const StyledDiv = withStyles(HocDiv)