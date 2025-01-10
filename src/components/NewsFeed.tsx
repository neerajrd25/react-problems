export const NewsFeed = () => {

  // const news = [{}];
  return (<>
    <><div>
      <h2>
        <Article title={{ heading: 'Breaking News'}} />
      </h2>
    </div></>
  </>)
}

const Article = (props) => {
  // props are readonly
  // props.title.heading ='Not so news';
  return <p>This is article {props.title.heading}</p>
}