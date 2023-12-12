import UpdateBookContainer from "../../containers/UpdateBookContainer";
import {useParams} from "react-router-dom";

const UpdateBook = () => {
    const {id} = useParams();
    return <UpdateBookContainer id={Number(id)} />
}
export default UpdateBook;