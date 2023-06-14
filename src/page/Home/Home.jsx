import "./home.css";
import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbar/Navbar";
import Slider from "../../component/Slider/Slider";
import Card from "./../../component/Card/Card";
import data from "../../data/productsData";
function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home">
        <Slider />

        <h2 className="title-text">
          Распродажа
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
              fill="black"
            ></path>
          </svg>
        </h2>
        <div className="products">
          {data.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              img={product.img}
              isItInSale={product.isItInSale}
              rating={product.rating}
              voices={product.voices}
              credit={product.credit}
              oldprice={product.oldprice}
              currentprice={product.currentprice}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
