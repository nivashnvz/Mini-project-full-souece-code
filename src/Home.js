import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("product").onSnapshot((snapshot) => {
      setProducts(snapshot.docs.map(doc => (
        { 
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          rating: doc.data().rating,
          image: doc.data().image
        }
        )))
        })
      }, []);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://st3.depositphotos.com/14715994/32898/v/600/depositphotos_328984784-stock-illustration-tailor-vector-logo-gold-single.jpg"
          alt=""
        />

        <div className="home__row">
          <ul className="home__row">
            {products.map((product) => (
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Home;
