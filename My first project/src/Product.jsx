import "./Product.css";
function Product({ title,price,features2}){
 const list=features2.map((feature) => <li>{feature}</li>);
//  let isDiscount=price>30000 ?"discount of 5% ":" ";
let styles={backgroundColor:price>30000 ? "pink":" "};
 

  
    return(
        <div className="Product" style={styles}>
            <h1>{title}</h1>
            <h2>price:{price}</h2> 
        
           <p>{list}</p> 
          {price>30000 ?<p>discount of 5%</p>:<a>get dicount</a>}

        </div>   
    ); 
}   
export default Product;  
 
       