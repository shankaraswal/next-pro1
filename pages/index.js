import Link from "next/link";
const Home = ({ products }) => {
  console.log(products);

  const productList = products.map(product => (
    <div className='col s4' key={product._id}>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={product.mediaUrl} />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {product.name}
            <i className='material-icons right'>more_vert</i>
          </span>
          <h6 className='text-red bold'>INR: {product.price}.00</h6>
          <p>
            <button className='waves-effect waves-light btn btn red'>Add to Cart</button>
          </p>
        </div>
        <div className='card-reveal '>
          <span className='card-title grey-text text-darken-4'>
            {product.name}
            <i className='material-icons right'>close</i>
          </span>
          <p>{product.desciption}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <br />
        <br />
        <h1 className='header center orange-text'>Product List</h1>
        <div className='row center'>
          <h5 className='header col s12 light'>
            A modern responsive front-end framework based on Material Design
          </h5>
        </div>
        <div className='row productList'>{productList}</div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/products");
  const data = await resp.json();
  return {
    props: {
      products: data
    }
  };
}
export default Home;
