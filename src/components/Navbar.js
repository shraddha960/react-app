// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


// export default function Navbar(props) {
//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           {props.title}
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//           </ul>

//           <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//               onClick={props.toggleMode}
//             />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
//               Enable DarkMode
//             </label> 
//           </div>

//           <div className={`form-check form-switch text-${props.mode === 'light'? 'green' : 'light'}`}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//               onClick={props.toggleModeGreen}
//             />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
//               Enable GreenMode
//             </label> 
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = { title: PropTypes.string.isRequired };

// Navbar.defaultProps = { title: "Set Title Here" };


import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom/cjs/react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault1"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">
              Enable DarkMode
            </label>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'green' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault2"
              onClick={props.toggleModeGreen}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">
              Enable GreenMode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = { title: "Set Title Here" };