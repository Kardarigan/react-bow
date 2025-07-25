import { useParams } from "react-router-dom";
import {ProductsFeed} from ".."

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
            <div>
                <ProductsFeed/>
            </div>
        </main>
    </div>;
};

export default Products;
