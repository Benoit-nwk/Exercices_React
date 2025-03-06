const List = () => {
    let tab = []
    const clickMe = (element) =>{
        element="hello"
        tab.push(element)
        console.log(tab);
    }

    return (
        <>
        <button onClick={clickMe}>Add "Hello"</button>
        <ul>
            {tab.map((hello, index) => <li key={index}>{hello}</li>)}
        </ul>
        </>
      );
}
 
export default List;