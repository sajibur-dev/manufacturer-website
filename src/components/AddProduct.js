import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const formData = new FormData();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    formData.append('image',image);
    const secretApiKey='d281449f0f986aa18066ad56b6e0e247';
    const url = `https://api.imgbb.com/1/upload?key=${secretApiKey}`;
    fetch(url,{
        method:'POST',
        body:formData
    }).then((res) => res.json())
    .then((result) => {
        if(result.success){


            const products = {
                name:data.name,
                pricePerProduct:data.pricePerProduct,
                minimumOrderQuantity:data.minimumOrderQuantity,
                availableQuantity:data.availableQuantity,
                shortDescription:data.shortDescription,
                image:result.data?.url
            };
            console.log(products);

            fetch('http://localhost:5000/products',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization : `Berer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(products)
            }).then((res) => res.json())
            .then((result) => console.log(result))
        }
    })

  };
  return (
    <div className="w-full">
      <h1 className="text-2xl my-5 text-center ">Add a new product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-around items-center"
      >
        <div className="space-y-3">
          <div class="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="product name"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
                minLength: {
                  value: 3,
                  message: "provide minimum 3 word",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.name?.message}
                </span>
              )}

              {errors.name?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.name?.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="product price"
              {...register("pricePerProduct", {
                required: {
                  value: true,
                  message: "price is required",
                },
                min: {
                  value: 1,
                  message: "-ve negative number is not allowed",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.pricePerProduct?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.pricePerProduct?.message}
                </span>
              )}
              {errors.pricePerProduct?.type === "min" && (
                <span class="label-text-alt text-error">
                  {errors.pricePerProduct?.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="minimum quantity"
              {...register("minimumOrderQuantity", {
                required: {
                  value: true,
                  message: "minimum order quantity is required",
                },
                min: {
                  value: 10,
                  message: "provide minimum 10 quantity",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.minimumOrderQuantity?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.minimumOrderQuantity?.message}
                </span>
              )}

              {errors.minimumOrderQuantity?.type === "min" && (
                <span class="label-text-alt text-error">
                  {errors.minimumOrderQuantity?.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="available quantiy"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "available quantity  is required",
                },
                min: {
                  value: 50,
                  message: "provide minimum 50 quantity",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.availableQuantity?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.availableQuantity?.message}
                </span>
              )}

              {errors.availableQuantity?.type === "min" && (
                <span class="label-text-alt text-error">
                  {errors.availableQuantity?.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <textarea
              class="textarea textarea-bordered h-24"
              placeholder="description"
              {...register("shortDescription", {
                required: {
                  value: true,
                  message: "shortDescription  is required",
                },
                minLength: {
                  value: 200,
                  message: "provide minimum 200 word",
                },
              })}
            ></textarea>
            <label class="label">
              {errors.shortDescription?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.shortDescription?.message}
                </span>
              )}

              {errors.shortDescription?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.shortDescription?.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div>
          
        <div class="form-control w-full max-w-xs">
            <input
              type="file"
              placeholder="minimum quantity"
              {...register("image", {
                required: {
                  value: true,
                  message: "image is required",
                }
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.image?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.image?.message}
                </span>
              )}
            </label>
          </div>
          <input
            type="submit"
            value="add product"
            className="btn btn-primary mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
