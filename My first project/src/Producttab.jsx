import Product from "./Product.jsx";
function Producttab(){
    let option=["hi-tech", "durable","fast"];
  

    // let option2={a: "Hi-tech",b:"durable",c:"fast"};

    return(
    <>
  <Product title="camera" price={2000} features2={option}/>
    <Product title="Phone" price={35000} features2={option}/>
      <Product title="machine" price={40000} features2={option}/>
 
 
     
        </> 

    );
}
export default Producttab; 