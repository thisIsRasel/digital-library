import ViewBookContainer from "../../containers/ViewBookContainer";
import {useParams} from "react-router-dom";

const ViewBook = () => {
    const {id} = useParams();
    return <ViewBookContainer id={Number(id)}/>
}
export default ViewBook;