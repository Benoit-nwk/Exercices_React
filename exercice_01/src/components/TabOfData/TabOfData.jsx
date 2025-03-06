const TabOfData = () => {
    let data = [{key:1,firstname:"Albert",lastname:"DUPONT"},{key:2,firstname:"Maria",lastname:"DUPONT"},{key:3,firstname:"Chloé",lastname:"DUPONT"},{key:4,firstname:"Sylvia",lastname:"MARTEZ"}]
    return ( 
        <>
        {data.map(element => 
        <>
        <tr>
        <td>{element.key}</td>
        <td>{element.firstname}</td>
        <td>{element.lastname}</td>
        </tr>
        </>
        )}
        
        </>
     );
}
 
export default TabOfData;