import {Formik} from "formik";
import {Book} from "../../models/Book.ts";
import useBookForm from "../../hooks/useBookForm.ts";
import {useNavigate} from "react-router-dom";

const BookForm = ({ initialValue, onSubmit }: { initialValue: Book, onSubmit: any }) => {
    const navigate = useNavigate();
    const { bookFormSchema } = useBookForm();

    const handleOnSubmit = (e: Book) => {
        onSubmit(e);
    }

    const handleCancel = () => {
        navigate('/books');
    }



    return (
        <Formik
            initialValues={initialValue}
            validationSchema={bookFormSchema}
            onSubmit={(e) => handleOnSubmit(e)}
            method="POST"
        >
            {({ values, errors, handleChange, touched, handleSubmit }) => (
                <section className="flex flex-col w-full">
                    <section className="flex flex-col">
                        <div className="flex flex-row sm:flex-col xs:flex-col md:flex-col mt-24">
                            <div className="flex flex-col flex-1 xl:mr-8 2xl:mr-8 lg:mr-8">
                                <label htmlFor="title" className="relative sso-input-label">Title<span
                                        className="text-red text-sm absolute align-super">*</span></label>
                                <input
                                    type="text"
                                    name="title"
                                    value={values?.title}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter Book Title"
                                    className="library-input"
                                    id="title"
                                />
                                {errors["title"] && touched.title &&
                                    <span className="text-red text-sm h-10 mt-2">{errors.title}</span>}
                            </div>
                        </div>
                        <div className="flex sm:flex-col xs:flex-col mt-24">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="author" className="sso-input-label relative">Author<span
                                    className="text-red text-sm absolute align-super">*</span></label>
                                <input
                                    type="text"
                                    name="author"
                                    value={values?.author}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter Author Name"
                                    className="library-input"
                                    id="author"
                                />
                                {errors.author && touched.author &&
                                    <span className="text-red text-sm h-10 mt-2">{errors.author}</span>}
                            </div>
                        </div>
                        <div className="flex sm:flex-col xs:flex-col mt-24">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="publication_year" className="sso-input-label relative">Publication Year<span
                                        className="text-red text-sm absolute align-super">*</span></label>
                                <input
                                    type="text"
                                    name="publication_year"
                                    value={values?.publication_year}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter Book Publication Year"
                                    className="library-input"
                                    id="publication_year"
                                />
                                {errors.publication_year && touched.publication_year &&
                                    <span className="text-red text-sm h-10 mt-2">{errors.publication_year}</span>}
                            </div>
                        </div>
                        <div className="flex sm:flex-col xs:flex-col mt-24">
                            <div className="flex flex-col  flex-1">
                                <label htmlFor="summary" className="sso-input-label relative">Summary<span
                                    className="text-red text-sm absolute align-super">*</span></label>
                                <textarea

                                    name="summary"
                                    value={values?.summary}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter Book Summary"
                                    className="library-input resize-none"
                                    id="address"
                                />
                                {errors.summary && touched.summary &&
                                    <span className="text-red text-sm h-10 mt-2">{errors.summary}</span>}
                            </div>
                        </div>
                        <div className="flex flex-row justify-end items-center mt-24 gap-8">
                            <button type="button"
                                    className="w-120 border border-gray-dark py-6 px-12 rounded-8"
                                    onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type="submit"
                                    className="w-120 border border-gray-dark py-6 px-12 rounded-8"
                                    onClick={() => handleSubmit()}>
                                Submit
                            </button>
                        </div>
                    </section>
                </section>
            )}
        </Formik>
    )
}

export default BookForm;