import React from 'react';



const ProductComponent = ( {data} ) => {
	console.log('product',data);
	return (
		<div>
			<div className="row">
				<div className="card">
					<div className="card-header">
						<p className="h1">{data.description}</p>
					</div>
					<div className="card-body">
						<p>{data.name}</p>		
					</div>
				
				<p className="h2">Harga : {data.display_price}</p>
				</div>
			</div>
		</div>
		);
};

export default ProductComponent;