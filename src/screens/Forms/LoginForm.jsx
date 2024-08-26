import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData, resetFormData } from "../../redux/form/formActions";
import useForm from "../../hooks/useForm";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { username, email } = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.password !== "mod7ReactUSIP") {
      dispatch(resetFormData());
      setShowModalInfo(true);
    } else {
      dispatch(saveFormData(values));
    }
  };

  const handleLogout = () => {
    resetForm();
    dispatch(resetFormData());
    setShowLogoutModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ModalInfo
        visible={showModalInfo}
        message="Password incorrecto"
        onClose={() => setShowModalInfo(false)}
      />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5>
            <i className="fas fa-user"></i> username: {username}
          </h5>
          <h5>
            <i className="fas fa-envelope"></i> email: {email}
          </h5>
          <div>
            <label htmlFor="username">
              <i className="fas fa-user"></i> Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="password">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              style={{ flex: 1, marginRight: "10px" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-primary" // Clase compartida con el botón Submit
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </button>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Submit
            </button>
            <a
              href="#"
              onClick={() => setShowLogoutModal(true)}
              style={{ marginLeft: "10px", color: "blue" }}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </form>
      </div>

      {showLogoutModal && (
        <ModalInfo
          visible={showLogoutModal}
          message="¿Estás seguro de que quieres cerrar sesión?"
          onClose={() => setShowLogoutModal(false)}
          optionalButtonText="Presionar para salir!!!"
          onOptionalButtonClick={handleLogout}
        />
      )}
    </motion.div>
  );
};

export default LoginForm;
