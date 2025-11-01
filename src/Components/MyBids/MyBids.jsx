import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../../Context/AuthContext";

const MyBids = () => {
  const { user } = use(Authcontext);
  const [Bids,setBids]=useState([])
  useEffect(() => {
    if (!user) {
      return 
    }
    fetch(`http://localhost:3000/bids?email=${user.email}`).then((res) =>
      res.json()
    ).then(data=>setBids(data))
  }, [user]);


  return (
    <div>
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
              return  <tr key={Bid._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={`${user?.photoURL}`}
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

export default MyBids;
