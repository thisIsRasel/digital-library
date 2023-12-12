const BookListTableHeader = () => {
    return (
        <thead>
        <tr className="h-40">
            <th scope="col"
                className="px-6 py-3 text-start text-xs font-bold text-black uppercase">Id
            </th>
            <th scope="col"
                className="px-6 py-3 text-start text-xs font-bold text-black uppercase">Title
            </th>
            <th scope="col"
                className="px-6 py-3 text-start text-xs font-bold text-black uppercase">Author
            </th>
            <th scope="col"
                className="px-6 py-3 text-start text-xs font-bold text-black uppercase">Publication
            </th>
            <th
                className="px-6 py-3 text-end text-xs font-bold text-black uppercase">Action
            </th>
        </tr>
        </thead>
    )
}

export default BookListTableHeader;