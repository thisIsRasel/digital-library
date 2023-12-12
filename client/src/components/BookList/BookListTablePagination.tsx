const BookListTablePagination = ({onPageChange, pageNo}: { onPageChange: any, pageNo: number }) => {
    const onPageIncrement = () => {
        onPageChange(pageNo + 1);
    }

    const onPageDecrement = () => {
        const pg = pageNo - 1 < 0 ? 0 : pageNo - 1;
        onPageChange(pg);
    }

    return (
        <section className="flex flex-row justify-end items-center gap-8 mt-32">
            <button type="button"
                    className="border border-gray-dark py-6 px-12 rounded-8"
                    onClick={onPageDecrement}>
                Previous
            </button>
            <button type="button"
                    className="border border-gray-dark py-6 px-12 rounded-8"
                    onClick={onPageIncrement}>
                Next
            </button>
        </section>
    )
}

export default BookListTablePagination;