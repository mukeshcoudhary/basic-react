import { useEffect, useState } from "react";
import Card from "./Card";
import Navebar from "./Navebar";
import { Products } from "/src/Products.js";
import Pra from "./Pra";
import Tost from "./Tost";

function Home(props) {
  const [filterddata, setfilterddata] = useState(Products);
  const [productv, setproductv] = useState([]);
  // const [showToast, setShowToast] = useState()
  // setTimeout(() => {
  //   props.setToastMsg(false);
  // }, 3000);

  const handlefilter = (value) => {
    if (value != "All") {
      const data = Products.filter((item) => item.category == value);
      setfilterddata(data);
    } else {
      setfilterddata(Products);
    }
  };

  return (
    <>
      {/* conditional toa */}
      {/* {props.err && <Tost err={props.err} />} */}
      {/* {console.log(showToast, "msg in home page")} */}
      {/* navigation */}
      <div className="container">
        <Navebar
          // isLoggin={props.isLoggin}
          // setlogin={props.setlogin}
          handlefilter={handlefilter}
          productv={productv}
          setproductv={setproductv}
        />
      </div>
      {/* products mapping */}
      <div className="row">
        {filterddata.map((a) => (
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <div className="card p-3 h-100" key={a.id}>
              <img src={a.image} alt="" />
              <h5>Name :-{a.name}</h5>
              <h6>Price :-{a.price}</h6>
              <button
                className="bg-amber-400 mt-5 p-1 rounded-4"
                onClick={() =>
                  productv.includes(a)
                    ? setproductv([...productv])
                    : setproductv([...productv, a])
                }
              >
                Add To Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
