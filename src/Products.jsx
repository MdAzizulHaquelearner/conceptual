/** @format */
import Modal from "./Modal";
export default function Products({ items }) {
	const { category, description, id, image, price, title, rating } = items;

    const handleBuyButton =() =>{
        <Modal></Modal>
    }
	return (
		<div style={{backgroundColor:"lightcyan",borderRadius:"55px",margin:"20px"}}>
			<div className="card">
				<figure className="px-10 pt-10">
					<img style={{width:"200px",borderRadius:"20px"}} src={image} alt="products" className="rounded-xl" />
				</figure>
				<div className="card-body items-center text-center">
					<h2>{title}</h2>
					<p>{description}</p>
					<div
						style={{ display: "flex", justifyContent: "center", gap: "20px" }}
					>
						<h4>price :{price} $</h4> <h4>Rating : {rating.rate}*</h4>
					</div>
					<div className="card-actions">
						<button className="btn btn-primary" onClick={handleBuyButton}>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}
