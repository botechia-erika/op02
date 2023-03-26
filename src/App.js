import "./styles.css";
import { useState } from "react";
export default function App() {
  const dataProducts = [
    {
      id: 0,
      name: "Astro BASKET",
      description: "Camiseta Astronauta Basketeiro",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [0],
        p: [1],
        m: [2],
        g: [3],
        gg: [4],
        xl: [1]
      },
      rating: 5,
      numReviews: 0,
      color: "AZUL",
      img: "https://i.ibb.co/qmZ2mF0/p00-Astro-Basket.jpg"
    },
    {
      id: 1,
      name: "Purple Space Galaxy",
      description: "Camiseta Algodao com estampa via-lactea",
      price: 180,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "ROXA",
      img: "https://i.ibb.co/WxvbpZT/p01-Purple-Space-Galaxy.jpg"
    },
    {
      id: 2,
      name: "Pizza on Galaxy",
      description: "Camiseta Algodao com estampa Pizza Galaxy",
      price: 30,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.2,
      numReviews: 0,
      color: "AZUL",
      img: "https://i.ibb.co/vqc6Zzs/p02-Pizza-Galaxy.jpg"
    },
    {
      id: 3,
      name: "Astro Blaster",
      description: "Camiseta Algodao com estampa Astro Blaster",
      price: 50,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "PRETO",
      img: "    https://i.ibb.co/LhmpkQy/p03-Astro-Blaster.jpg"
    },
    {
      id: 4,
      name: "Astro DJ pizza",
      description: "Camiseta Astro DJ and pizzas",
      price: 50,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [3],
        m: [4],
        g: [4],
        gg: [5],
        xl: [6]
      },
      rating: 5,
      numReviews: 0,
      color: "AZUL",
      img: "https://i.ibb.co/Rvr1jwm/p04-Astro-DJ.jpg"
    },
    {
      id: 5,
      name: "ASTRO BEGE FEMININ0",
      description: "Camiseta Algodao com ASTRO BEGE",
      price: 100,
      typeCategory: 1,
      category: ["Camiseta", "Adulto", "Feminino"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "BEGE",
      img: "https://i.ibb.co/SmzQtHK/p05-Astron-Naut-F.jpg"
    },
    {
      id: 6,
      name: "Astro Rainbow Pride",
      description: "Camiseta Algodao com estampa Rainbow Pride",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto", "Pride"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.2,
      numReviews: 0,
      color: "AZUL",
      img: "https://i.ibb.co/sJtH41n/p06-Astro-Rainbow.jpg"
    },
    {
      id: 7,
      name: "Astro Gorilla Feminino",
      description: "Camiseta Algodao com estampa Astro Gorilla Feminino",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto", "Feminino"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "ROSA",
      img: "https://i.ibb.co/8N6G0Tc/p07-Astro-Gorilla-F.jpg"
    },
    {
      id: 8,
      name: "Astro AstroLiberty",
      description: "Camiseta Astronauta and Liberty",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [3],
        p: [3],
        m: [1],
        g: [0],
        gg: [0],
        xl: [0]
      },
      rating: 5,
      numReviews: 0,
      color: "BRANCO",
      img: "https://i.ibb.co/kB7cPyz/p08-Astro-Liberty.jpg"
    },
    {
      id: 9,
      name: "Astro Stan Lee",
      description: "Camiseta Algodao com estampa Stan Lee",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "PRETO",
      img: "https://i.ibb.co/BTJVYLT/p09-Astro-Stan-Lee.jpg"
    },
    {
      id: 10,
      name: "ASTRO MISSION",
      description: "Camiseta Algodao com estampa Astro Mission",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.2,
      numReviews: 0,
      color: "CHUMBO",
      img: "https://i.ibb.co/BCtZRBP/p10-Astro-Mision.jpg"
    },
    {
      id: 11,
      name: "Astro Eternity",
      description: "Camiseta Algodao com estampa Astro Eternity",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "PRETO",
      img: "https://i.ibb.co/phDZ3vR/p11-Astro-Eternity.jpg"
    },
    {
      id: 12,
      name: "Astro Alien",
      description: "Camiseta estampa Alien",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto", "Feminino"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 5,
      numReviews: 0,
      color: "PRETO",
      img: "https://i.ibb.co/Sn8pvpm/p13-Astro-Alien-F.jpg"
    },
    {
      id: 13,
      name: "Astro Ballons",
      description: "Camiseta Algodao com estampa Astro Ballons",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.5,
      numReviews: 0,
      color: "PRETO",
      img: "https://i.ibb.co/3pZdx0P/p12-Astro-Ballons.jpg"
    },
    {
      id: 14,
      name: "AMONG US",
      description: "Camiseta Algodao com estampa AMONG US",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 4.2,
      numReviews: 0,
      color: "AZUL",
      img: "https://i.ibb.co/P1LX4M8/p14-Astro-Among-Us.jpg"
    },
    {
      id: 15,
      name: "Alien DONT!",
      description: "Camiseta Algodao com estampa Alien DONT BELIEVE HUMANS! ",
      price: 80,
      typeCategory: 1,
      category: ["Camiseta", "Adulto", "Feminino"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 5,
      numReviews: 0,
      color: "BRANCO",
      img: "https://i.ibb.co/BwL69Wj/p15-Alien-Dont.jpg"
    },
    {
      id: 16,
      name: "Calça Moletom Slim",
      description: "Calça JOGIN masculina hardcore ",
      price: 90,
      typeCategory: 2,
      category: ["Calca", "Adulto"],
      sizeInStock: {
        pp: [2],
        p: [1],
        m: [3],
        g: [4],
        gg: [1],
        xl: [1]
      },
      rating: 5,
      numReviews: 0,
      color: "CHUMBO",
      img:
        "https://http2.mlstatic.com/calca-de-moletom-slim-moleton-masculina-hardcore-D_NQ_NP_909826-MLB31150583963_062019-F.jpg"
    }
  ];

  const orderPrice = (e) => {
    setProductsPrice(
      [...productsPrice].sort((a, b) => (a.price > b.price ? -1 : 1))
    );
  };

  const orderPrice2 = (e) => {
    setProductsPrice(
      [...productsPrice].sort((a, b) => (a.price > b.price ? 1 : -1))
    );
  };

  const [productsPrice, setProductsPrice] = useState([...dataProducts]);

  return (
    <div className="App">
      <div>
        <button onClick={orderPrice}>MAIOR PRECO</button>
        <button onClick={orderPrice2}>MENOR PRECO </button>
      </div>

      <ul>
        {[...productsPrice].map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
