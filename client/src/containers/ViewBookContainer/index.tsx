import {useGetBookQuery} from "../../services/book.service.ts";
import ViewBookDetails from "../../components/ViewBook/ViewBookDetails.tsx";

const ViewBookContainer = ({id}: { id: number }) => {

    const {data, isLoading} = useGetBookQuery(id);

    return (
        <section className="flex flex-col">
            {
                data && !isLoading ? (
                    <ViewBookDetails book={data}/>
                ) : null
            }
            {
                isLoading ? (
                    <div className="flex flex-col justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-dark"></div>
                        <div className="text-xl font-bold mt-4">Loading...</div>
                    </div>
                ) : null
            }

        </section>
    )
}

export default ViewBookContainer;