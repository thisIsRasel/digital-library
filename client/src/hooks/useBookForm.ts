import {Book} from "../models/Book.ts";
import * as Yup from 'yup';

const useBookForm = () => {

    const bookFormSchema = Yup.object().shape({
        title: Yup.string().required('Title is Required'),
        author: Yup.string().required('Author is required'),
        publication_year: Yup.number().required('Publication Year is required'),
        summary: Yup.string().required('Summary is required'),
    });

    const initialValues: Book = {
        id: 0,
        title: '',
        author: '',
        publication_year: 0,
        summary: '',
    };

    return {
        bookFormSchema,
        initialValues,
    };
};

export default useBookForm;