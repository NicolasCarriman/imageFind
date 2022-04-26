import react, {useState, useEffect, useRef} from 'react';
import Carousel from './slide2.js'
import Bio from './bio.js'

export default function Main(props){


	const mainRef = useRef(null);
	const [setMain, setStateMain] = useState(false)
	const [imgLink, setImgLink] = useState([])

	useEffect(() => {
		if(mainRef.current.className =="maincont active"){
			mainRef.current.style.transition = `2000ms ease-out all`;
			mainRef.current.style.transform = `translateX(-537px)`;
			setStateMain(true)
		}

	}, [props.name] );

	const handleUser= (e)=>{
		setImgLink(e)
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
					{setMain ?
						<>
							<Bio Data={imgLink}/>
							
						</>
					:
						<></>
					}
						
					</article>
				</aside>
			</main>
		</div>
		)
}