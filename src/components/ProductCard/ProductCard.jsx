import "./ProductCard.css"

function ProductCard({itemDetails})
{
    const {
        id,
        name,
        brand,
        gender,
        price,
        sizesAvailable,
        imgSrc
    } = itemDetails


    return (
        <div className="product-card">
            <img 
                className="img-product"
                src={imgSrc} 
                alt={name}
            >
            </img>
            <div className="product-details">
                <div className="card-product-name">{name}</div>
                <p>Brand: {brand}</p>
                <p>₹{price}</p>
                <span>Sizes: </span>{
                    sizesAvailable.map(size=>
                        <span className="sizes-available">{size.toUpperCase()}</span>    
                    )
                }
            </div>
        </div>
    )
}

export { ProductCard }