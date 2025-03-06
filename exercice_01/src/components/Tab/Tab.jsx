import TabOfData from "../TabOfData/TabOfData";

const Tab = () => {
    return ( 
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                </tr>
            </thead>
            <tbody>
                <TabOfData/>
            </tbody>
        </table>
     );
}
 
export default Tab;