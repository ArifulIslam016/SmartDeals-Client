import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { Authcontext } from "../../Context/AuthContext";

const DetailedProduct = () => {
  const productData = useLoaderData();
  const {user}=use(Authcontext)
  const { image, _id, price_min, price_max, title } = productData;
    const modalRef=useRef()
    if(!user){
        return <h1>Loading....</h1>
    }
  const handleBidModal=()=>{
    modalRef.current.showModal()
  }
  const handleBidPrice=e=>{
    e.preventDefault()
    const name=e.target.name.value;
    const email=e.target.email.value;
    const BidPrice=e.target.bidprice.value;
    const productId=_id
    console.log(name,BidPrice,email,productId)
  }
  return (
    <div>
      <h1>{title}</h1>
      <h3>Price:{price_min}-{price_max}</h3>
      <button onClick={handleBidModal} className="btn btn-primary">I want to buy this product</button>
      
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog ref={modalRef}  className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
         <form onSubmit={handleBidPrice}>
         <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" defaultValue={user.displayName} readOnly/>
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
  );
};

export default DetailedProduct;
