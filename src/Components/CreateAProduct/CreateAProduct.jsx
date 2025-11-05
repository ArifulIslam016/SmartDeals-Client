import React from "react";
import useAuthHook from "../../Hooks/AuthHooks";
import axios from "axios";
import Swal from "sweetalert2";
// import useAxiosInstance from "../../Hooks/AxiosInstance";
import { data } from "react-router";
import useSecureInstance from "../../Hooks/SecureInstance";

const CreateAProduct = () => {
  const { user } = useAuthHook();
  const securedInstanse=useSecureInstance()
  // const inastance=useAxiosInstance()
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    const seller_name = user.displayName;
    const seller_image = user.photoURL;
    const email = user.email;
    const newProduct = {
      title,
      image,
      price_max,
      price_min,
      seller_name,
      seller_image,
      email,
    };
    securedInstanse.post('/products',{newProduct}).then(data=>console.log(data.data))

      // inastance.post('/products',{newProduct}).then(data=>console.log(data))
    // axios
    //   .post("https://smartdeals-api-server.vercel.app/products", newProduct)
    //   .then((data) => {
    //     if(data?.data?.insertedId){
    //        Swal.fire({
    //                    position: "center",
    //                    icon: "success",
    //                    title: "Your products has been added",
    //                    showConfirmButton: false,
    //                    timer: 1500,
    //                  });
    //     }
    //   });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <form onSubmit={handleCreateProduct}>
        <fieldset className="fieldset">
          <label className="label">Product Name</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Phoduct name"
          />
          {/* <label>Photo Url</label>
              <input type="text" name="photoUrl" /> */}
          <label className="label">PhotoUrl</label>
          <input
            type="text"
            className="input"
            name="image"
            placeholder="Paste product url"
          />
          <label>Minimum Price</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="Minimum Price"
          />
          <label>Maximum Price</label>
          <input
            type="text"
            name="price_max"
            className="input"
            placeholder="Max Price"
          />
          <button className="btn btn-neutral mt-4">Create Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
