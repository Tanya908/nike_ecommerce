import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import {filterGroups} from "../../components/Sidebar/filterData.ts";

const Men = () => {
    return (
       <>
           <Sidebar
               title="New (500)"
               filters={filterGroups}
           />
       </>
    )
}
export default Men
