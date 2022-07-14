import React from 'react'

export default function ProductCard() {
	const data = [
		{
			name:"HP Pavallien 8001",
			price:54000,
			image:"https://5.imimg.com/data5/SO/UH/MY-14352828/hp-laptop-500x500.jpg",
			desc:{ram:"8GH",internal:"1TB",charginPort:"C Type"}
		},
		{
			name:"Iphone 13",
			price:13000,
			image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1644969385505",
			desc:{ram:"8GH",internal:"64GB",charginPort:"C Type"}
		}
	]
  return (
	<div className='container'>
		<div className="row">
			<div className="col-sm-4 sidebar">
				<h3>Category</h3>
			<ul className='list-group'>
				<li className="list-group-item">Electronics</li>
				<li className="list-group-item">Laptop</li>
				<li className="list-group-item">Mobile</li>
			</ul>
			<br />
			<h5 className='text-info'>Clothes</h5>
			<br />
			<h6 className='text-primary'>Home & Application</h6>
			<hr />
			<br />
			<h6 className="text-info">Price Range</h6>
			<br />
			<button className='btn btn-dark w-100'>0</button>
			<br /><br />
			<button className='btn btn-dark w-100'>100000</button>
			</div>
			<div className="col-sm-8 mt-1">
				{
					data.map(item => <div className='card mt-2'>
						<div className="d-flex justify-content-around">
							<img src={item.image} height={250} width={300} alt="" />
							<div className='mx-2 my-5'>
								<h6 className='text-info'>{item.name}</h6>
								<h6 className='text-primary'>{item.price}</h6>
								<hr />
								<div className="d-flex justify-content-evenly">
								<div className="content mx-2">
								<p className='text-dark'>Ram:&nbsp;{ item.desc.ram}</p>
								<p className='text-dark'>Charing-Port:&nbsp;{ item.desc.charginPort}</p>
								<p className='text-dark'>Internal:&nbsp;{ item.desc.internal}</p>
								</div>
								<div className="button">
								<button className="btn btn-info">Buy Now</button>
								<button className="btn btn-danger">Add To Cart</button>
								</div>
								</div>
							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	</div>
  )
}
