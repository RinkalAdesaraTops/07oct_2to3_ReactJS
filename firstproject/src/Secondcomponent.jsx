
// const Secondcomponent = (props) => {
const Secondcomponent = ({myname,myage,arr}) => {
  return (
    <div>
      <h3>Second Component called...</h3>
      {/* <h4>Name is -- {props.myname}</h4> */}
      <h4>Name is -- {myname}</h4>
      {/* <h4>Age is -- {props.myage}</h4> */}
      <h4>Age is -- {myage}</h4>
      <ul>
        {
            arr.map((i)=>{
                return (<li>{i}</li>)
            })
        }
      </ul>
    </div>
  )
}

export default Secondcomponent
