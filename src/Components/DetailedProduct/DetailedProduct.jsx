import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { Authcontext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const DetailedProduct = () => {
  const productData = useLoaderData();
  const [Bids, setBids] = useState([]);
  const { user } = use(Authcontext);
  const { image, _id, price_min, price_max, title } = productData;
  const modalRef = useRef();
  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, [productData]);
  if (!user) {
    return <h1>Loading....</h1>;
  }

  const handleBidModal = () => {
    modalRef.current.showModal();
  };
  const handleBidPrice = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const BidPrice = e.target.bidprice.value;
    // const productId=_id;
    // console.log(name,BidPrice,email,productId)
    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      bid_price: BidPrice,
      status: "pending",
      buyer_image: user?.photoUrl ? user.photoUrl : "",
    };
    fetch("http://localhost:3000/bids", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          modalRef.current.close();

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your bids has been recorded",
            showConfirmButton: false,
            timer: 1500,
          });
          newBid._id=data.insertedId;
          // const newAddesBids=[...]
          setBids(prev=>[...prev,newBid].sort((a,b)=>b.bid_price-a.bid_price))
        }
      });
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h3>
          Price:{price_min}-{price_max}
        </h3>
        <button onClick={handleBidModal} className="btn btn-primary">
          I want to buy this product
        </button>

        {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleBidPrice}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  defaultValue={user.displayName}
                  readOnly
                />
                {/* <label>Photo Url</label>
              <input type="text" name="photoUrl" /> */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  defaultValue={user.email}
                  readOnly
                />

                <input
                  type="text"
                  name="bidprice"
                  className="input"
                  placeholder="Give your price"
                />
                <button className="btn btn-neutral mt-4">Bid Now</button>
              </fieldset>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* Bids for this product */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {Bids.map((Bid, index) => {
              return  <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{Bid.buyer_name} </div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {Bid.buyer_email}
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span> */}
                  </td>
                  <td>{Bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
