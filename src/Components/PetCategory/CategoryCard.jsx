import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
    const { image, title, category } = data;
    return (
        <Link>
            <div className="card lg:w-96 md:w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title uppercase">{category}</h2>
                    <p>{title}</p>
                </div>
                <figure><img src={image} className="h-64 w-full hover:scale-125 transition-all" alt="Image" /></figure>
            </div>
        </Link>
    );
};

export default CategoryCard;