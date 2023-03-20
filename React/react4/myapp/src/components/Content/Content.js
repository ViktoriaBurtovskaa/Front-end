import './Content.css'

function Content(props) {
    const {color, discount_price, price} = props
    const sales = Math.round(Math.abs( 100 * ((discount_price / price) - 1)))

    return(
        <div className="item"> 
           <div className='image' style={{backgroundColor: color}}></div>
           <p>Discount price: {discount_price}</p>
           <p>Price: {price}</p>
           <p>{`${sales}%`}</p>
        </div>
    )
}

export default Content