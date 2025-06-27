import React, { useState, memo } from "react";
import { Link, Outlet,NavLink } from "react-router-dom";
import Dark from "../Dark";

function Navebar(props) {
  const [count, setCount] = useState(1);

  const { setToken } = props

  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    if (count == 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  const [cartvisibal, setcartvisibal] = useState(true);

  function removeitem(i) {
    const newarray = props.productv.filter((v, index) => {
      if (i == index) {
        return false;
      } else {
        return true;
      }
    });
    props.setproductv(newarray);
  }

  return (
    <>
      <div
        className={
          cartvisibal == true
            ? "hidden"
            : "text-center absolute bg-gray-400 h-[100vh] z-1 right-0 top-20 p-5 rounded-2 w-50  overflow-scroll"
        }
      >
        {props.productv == "" ? (
          <h2>NO - ITEM</h2>
        ) : (props.productv.map((a, i) => {
            return (
              <div className="card mt-4 " key={a.id}>
                <div className="flex p-3">
                  <img
                    className="rounded-4"
                    width={"50%"}
                    src={a.image}
                    alt=""
                  />
                  <div className="pt-4 pl-5">
                    <h5>Name :-{a.name}</h5>
                    <h6>Price :-{a.price}</h6>

                    <div className="flex mt-4 gap-4">
                      <div className="flex gap-3 border-1 justify-content-center w-20 rounded-3 ">
                        <button onClick={decCount}>-</button>
                        <div className="pt-1">{count}</div>
                        <button onClick={incCount}>+</button>
                      </div>
                      <div>
                        <button
                          onClick={() => removeitem(i)}
                          className="bg-gray-800 p-1 rounded-3 text-white"
                        >
                          Remove <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <hr className="border-2 border-black" />
        <div>
          <div
            className={
              props.productv.length === 0
                ? "hidden"
                : "border-1 p-2 flex justify-self-start rounded-3"
            }
          >
            {props.productv.length <= 1 ? (
              <div>TOTAL PRICE:- ₹{props.productv.map((a) => a.price)}</div>
            ) : (
              <div>
                TOTAL PRICE:- ₹
                {
                  props.productv.reduce((a, b) => {
                    let x = a.price + b.price;
                    return { price: x };
                  }).price
                }
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex p-4 justify-between">
        <h2 className=""> WellCome Mukesh</h2>
        {/* <Link to="login">login</Link>  */}
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="/">Home</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="card">card</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="weather">Weather</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="Form">Form</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="Notes">Notes</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="Github">Github</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="Form2">Form2</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="Feedback">Feedback</NavLink>
        <NavLink className={({isActiv})=>(isActiv?"text-blue-500":"text-red-600")} to="Mood">Mood</NavLink>
        <main>
          <Outlet />
        </main>

        <div className="flex align-middle gap-2">
          <select
            className="bg-amber-300 rounded-2 p-2"
            onChange={(e) => props.handlefilter(e.target.value)}
            name=""
            id=""
          >
            <option value="All"> All</option>
            <option value="Mahindra"> Mahindra</option>
            <option value="Toyota"> Toyota</option>
            <option value="Mitsubishi"> Mitsubishi</option>
            <option value="Jeep"> Jeep</option>
          </select>

          <div className="relative">
            <button
              className="bg-amber-300 p-2 rounded-3"
              onClick={() => setcartvisibal(!cartvisibal)}
            >
              Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <div className="absolute bg-red-600  rounded-5 h-6 w-6 text-center text-white bottom-9 left-12 ">
              {props.productv.length}
            </div>
          </div>

          <button
            className="bg-orange-700 p-2 rounded-3 text-white"
            onClick={() => setToken(false)}
          >
            Log out <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
      <Dark />

    </>
  );
}

export default memo(Navebar);
