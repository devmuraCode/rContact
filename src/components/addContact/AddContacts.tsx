import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { contactApi } from "../../services/ContactService";
import './style.css'
import { IContact } from "../../models/IContact";
const AddContact = () => {
  const { register, handleSubmit, reset } = useForm<IContact>();

  const [createContact] = contactApi.useCreateContactMutation();

  const Submit: SubmitHandler<IContact> = async (data) => {
    console.log(data);
    await createContact(data);
    reset();
  };

  return (
    <div className="Wrapper">
      <form onSubmit={handleSubmit(Submit)}>
        <input
          {...register("fio", { required: true })}
          // placeholder="Name"
          style={{ fontSize: "20px" }}
         placeholder="Name"
         className="Input-text"
        />
       <input
          type="email"
          style={{ fontSize: "20px" }}
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Please enter a valid email",
            },
          })}
          placeholder="Email"
          className="Input-text"
        />
        <input
          type="number"
          style={{ fontSize: "20px" }}
          {...register("phone_number")}
          placeholder="Phone"
          className="Input-text"
        />
       <input
          type="string"
          style={{ fontSize: "20px" }}
          {...register("category")}
         placeholder="Category"
         className="Input-text"
        />

 
        <button className="btn">PostContact</button>
      </form>
    </div>
  );
};

export default AddContact;
