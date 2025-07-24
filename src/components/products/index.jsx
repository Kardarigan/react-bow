import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
    const { category } = useParams();

    return <div className="case flex gap-5 relative">
        <aside></aside>
        <main>
            <header>
                <h1 className="title-lg">
                    {category == null ? 'فروشگاه بُو کتاب' : (
                        <>
                            خرید کتاب<br />{category}
                        </>
                    )}
                </h1>

            </header>
        </main>
    </div>;
};

export default Products;
