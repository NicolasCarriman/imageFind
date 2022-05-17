import react, {useState, useEffect, useRef} from 'react';
import Carousel from './slide2.js'
import Bio from './bio.js'
import '../styles/main.css'

export default function Main(props){


	const mainRef = useRef(null);
	const [setMain, setStateMain] = useState(false)
	const [imgLink, setImgLink] = useState([])
	const [setBio, setStateBio] = useState(false)

	useEffect(() => {
		if(mainRef.current.className =="maincont active"){
			mainRef.current.style.transition = `2000ms ease-out all`;
			mainRef.current.style.transform = `translateX(-537px)`;
			setStateMain(true)
		}

	}, [props.name] );

	const handleUser= (e)=>{
		setImgLink(e)
		setStateBio(true)
	}


	return(
		<div className='maincontainer' >
			<main className ={props.name} ref={mainRef} >
				<section>
					{setMain ?
						<>
							<Carousel userData={(e)=>handleUser(e)}/>
							
						</>
					:
						<></>
					}
				</section>
				<aside>
					<article >
					{setBio ?
						<>
							<Bio Data={imgLink}/>
							
						</>
					:
						<>
							<div className='introduction'> porfavor haga doble click en la imagen
							</div>
						</>
					}
						
					</article>
				</aside>
			</main>
		</div>
		)
}