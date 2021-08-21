import React from 'react';
import Header from '../utils/Header'

const PagePaper = ({children}) => {


    return (
        <React.Fragment>
            <section
                className="page-paper relative w-full bg-white px-10 py-10 rounded-xl shadow-md"
            >
                {children}
            </section>
        </React.Fragment>
    )
}

export default PagePaper