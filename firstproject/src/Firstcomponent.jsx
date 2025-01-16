const Firstcomponent = ()=>{
    let a=10
    let name="test"
    const add = ()=>{
        console.log("Addition is "+(10+12));       
    }
    let arr = [10,20,30,40,50]
    
    let disp =  arr.map((i)=><li>{i}</li>)
    return (
        <div>
            <h3>First component created by me...</h3>
            <h4>A is -- {a}</h4>
            <h4>Name is -- {name}</h4>
            <h4>Addition is -- {3+6}</h4>
            <button onClick={add}>Add</button>
            <ul>
                {disp}
                {/* {
                    // arr.map((i)=>{
                    //     return (
                    //         <li>{i}</li>
                    //     )
                    // })
                {/* } */}
            </ul>
        </div>
    )
}
export default Firstcomponent