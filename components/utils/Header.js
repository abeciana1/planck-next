import React from 'react';

const Header = () => {

    return (
        <React.Fragment>
            <div
                className="flex justify-between"
            >
                <img
                    src="/planck-logo.svg"
                    className="w-1/6"
                />
            </div>
            <p
                    className="planck-title text-center py-5"
                >
                    Planck Manuscripts Vol. 1 (2021)
                </p>
        </React.Fragment>
    )
}

export default Header

                // {/* <p
                //     className="planck-title self-center"
                // >
                //     Planck Manuscripts Vol. 1 (2021)
                // </p> */}