import react, {useState, useEffect, useRef} from 'react';
import '../styles/navbar.css'


export default function Navbar(props){
	const navbar = useRef(null);
	
	const {animationSkate}=props
	const navDel = (x) => {
		navbar.current.style.top = '0vh';
		if (navbar.current.children.length > 0){
			navbar.current.removeChild(navbar.current.children[0])
		}

		animationSkate();
	}
	
	  
	return(
	  <nav className={props.name} onAnimationEnd={navDel} ref={navbar} >
        <button onClick={props.btnClick} className={props.buttonName}  >E N T E R</button>
        <div className='blurnav'></div>
        <div className='itemsContainer'>
	        <div className='navItems'>
				<li><a>ABOUT</a></li>
				<li><a>CONTACT</a></li>
				<li><a>OTHERS</a></li>
				<li><a>LOG IN</a></li>        	
	        </div>
	    </div>
      </nav>
	)
} 