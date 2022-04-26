import react, {useState, useEffect, useRef} from 'react';
import Btn from './btn.js'
import '../styles/bio.css'

export default function Bio(props){

	const [userImg, setUserImg] = useState(false)
    const textRef= useRef(null)
    const bioCont= useRef(null)


	useEffect(() => {
		    bioCont.current.style.opacity = '0';
		if (props.Data.profile_image !== undefined){
			setUserImg(true);
			bioTransition();
			
		}
		const textInterval = setInterval(()=>{
			}, 2500);
	

	}, [props]);
	console.log(props.Data)

	const textSlide = ()=>{
		textRef.current.style.transition= '6400ms';
		textRef.current.style.transform= 'translateX(550px)';


		const trasitionFinished= () => {
 				textRef.current.style.transition = 'none';
 				textRef.current.style.transform = 'translatex(0px)';


 				textRef.current.removeEventListener('transitionend', trasitionFinished);
 			}
 			
 		textRef.current.addEventListener('transitionend', trasitionFinished);

	}

	const bioTransition = () =>{
		bioCont.current.style.opacity = '0';
		bioCont.current.style.top= '-10vh';
		bioCont.current.style.transition = 'none';
			
		setInterval(()=>{

 			bioCont.current.style.transition = '1500ms';
			bioCont.current.style.opacity = '1';
			bioCont.current.style.top= '0vh';

 		}, 1000);

	}
	return (
		<>
		<div className='bioContainer' ref={bioCont}>
			<div className='userPerfil'>
				<div className='nameContainer'>
					<h2 ref={textRef} >{props.Data.username}</h2>
				</div>
				<Btn/>
				<div className='description'>
					<p >{props.Data.bio}</p>
				</div>
			</div>
			{userImg ?
				<>
					<div className='perfilImg'>
						<img src={props.Data.profile_image.large}></img>
					</div>
				</>
				:
				<></>

			}
		</div>
		<div className='bckgroundBlur'></div>
		</>
						
		)
}