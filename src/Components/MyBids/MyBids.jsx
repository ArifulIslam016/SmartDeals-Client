import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import useSecureInstance from "../../Hooks/SecureInstance";

const MyBids = () => {
  const { user,isLoading } = use(Authcontext);
  // console.log(user)
  const [Bids, setBids] = useState([]);
  const secureInstance=useSecureInstance()
  useEffect(() => {
    if (!user) {
      return;
    }
   secureInstance.get(`bids?email=${user.email}`).then(data=>setBids(data.data))
  }, [user]);
  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //  axios.get(`http://localhost:3000/bids?email=${user.email}`,{ headers:{
  //       authorization:`Bearer ${user.accessToken}`
  //     }}).then((data) => setBids(data.data))
  // }, [user]);
 
  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //   fetch(`http://localhost:3000/bids?email=${user.email}`,{
  //     headers:{
  //       authorization:`Bearer ${user.accessToken}`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setBids(data));
  // }, [user]);
 
  const handleRemoveBids = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
     .then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:3000/bids/${id}`,{
      method:"DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount){
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
        const remainingBids=Bids.filter(Bid=>Bid._id!==id)
        setBids(remainingBids)
        }
      });
      }
    });
  };
 if(isLoading){
    return
  }
  return (
    <div>
         {/* <img
                              src={`${user.photoURL}`}
                              alt="Avatar Tailwind CSS Component"
                            /> */}
      <h1>My total bids: {Bids.length}</h1>
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
                return (
                  <tr key={Bid._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={`${user.photoURL}`}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{Bid.buyer_name} </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {Bid.buyer_email}
                      <br />
                    </td>
                    <td>{Bid.bid_price}</td>
                    <th>
                      <button
                        onClick={() => handleRemoveBids(Bid._id)}
                        className="btn btn-outline text-red-500 btn-xs"
                      >
                        Delete Bids
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBids;
