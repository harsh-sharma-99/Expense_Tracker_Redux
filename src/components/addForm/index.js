import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import { categories } from "../../constants/categories";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { addExpense } from "./../../redux/actions/expenses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./../successModal/index";

const AddForm = () => {
  const [cartegorgyOpen, setCartegorgyOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dropdownCategory = categories;
  const dispatch = useDispatch();

  //on entering amount
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  //on selecting a category from dropdown
  const handleCategory = (category) => {
    console.log(category.title);
    setCategory(category);
    setCartegorgyOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || category === "") {
      const notify = toast.warn("Please enter valid data!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
      });
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setOpenModal(true);
  };

  return (
    <div className="add-form-card">
      <ToastContainer />
      <SuccessModal openModal={openModal} setOpenModal={setOpenModal} />

      <div className="add-form-item">
        <label>Title</label>
        <input
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="add-form-item">
        <label>Amount</label>
        <input
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="add-form-dropdown">
        <div className="category">
          <div className="category-dropdown">
            <label>{category ? category?.title : "Category"}</label>
            <RiArrowDropDownLine
              style={{ fontSize: "30px" }}
              onClick={() => setCartegorgyOpen(!cartegorgyOpen)}
            />
            {cartegorgyOpen && (
              <div className="category-item-conatiner">
                {dropdownCategory?.map((category) => {
                  return (
                    <div
                      key={category.id}
                      onClick={() => handleCategory(category)}
                      className="categorty-item"
                      style={{
                        borderRight: `5px solid ${category.color}`,
                      }}
                    >
                      <label>{category.title}</label>
                      <img
                        style={{ width: "25px" }}
                        src={category.icon}
                        alt={category.title}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="add-form-submit-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <MdPlaylistAdd />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
