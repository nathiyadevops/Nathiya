import React from "react";

const CenterAligner = ({ children }) => {
    return (
        <section className={`flex items-center justify-center py-10`}>
            <div className=" w-full mx-auto flex flex-col text-center content-center justify-center m-2 md:m-4 lg:m-8">{children}</div>
        </section>
    );
};

export default CenterAligner;
