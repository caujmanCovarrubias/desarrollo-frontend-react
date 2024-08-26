import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const { username, email } = useSelector((state) => state.form.formData);

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/default" className="navbar-link">
            <i className="fas fa-cog"></i> Default
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/products" className="navbar-link">
            <i className="fas fa-box"></i> Product
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            <i className="fas fa-sign-in-alt"></i> LoginForm
          </Link>
        </li>
      </ul>
      {username && email && (
        <div className="navbar-user">
          <span>
            <i className="fas fa-user"></i> Bienvenido,{" "}
            <strong>{username}</strong>: {email}
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
