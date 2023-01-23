//import logo from '%PUBLIC_URL%/Header_Images/logo.webp';
 import './Static/Navbar.css';

function App() {
  return (
<header className="Header">
<div className=" HeaderContent">
<div className="logo">
    <img src="Images/logo.jpg" alt="logo"/>&nbsp;&nbsp;&nbsp;<h1>Bhartics.com</h1>
</div>
<nav>
    <ul className="HeaderLink">
        <li className='Home' to="/Home"  style={{color: "orangered"}}>Home</li>
        <li to="/About ">About</li>
        <li to="/services">Services</li>
        <li to="/Signup" style={{color:"maroon", backgroundColor: "gold" }}>Sign Up</li>
        <li to="/contact">contact</li>
    </ul>
</nav>
</div>
<div className="Section">
    <div className="Lsec"></div>
    <div className="Rsec">
        <div className="website">Bhartics.com</div>
        <div className="font_Style commetment"> Your One Stop Solution for all car related wishes.</div>
        <div className="font_Style tagline">We can Provide you the best budget car in the most <br/> Affordable rates. </div>
        <div className="font_Style review">Check out Our <b >
          <a target={'_blank'} href="https://www.google.com/search?b-d&q=bhartics"><span style={{color:"#4285f4"}}>G</span><span style={{color:"#ea4335"}}>o</span><span style={{color:"#fbbc05"}}>o</span><span style={{color:"#4285f4"}}>g</span><span style={{color:"#34a853"}}>l</span><span style={{color:"#ea4335"}}>e</span> reviews.</a></b> </div>
    </div>
</div>
</header>
  );
}
export default App;