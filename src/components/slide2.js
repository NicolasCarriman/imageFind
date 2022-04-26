import {useState, useEffect, useRef} from 'react';
import getImages from '../services/api.js'
import '../styles/photos.css'

export default function Carousel(props){
	const [images, setImages]= useState([])
	const [values, setValues]= useState()
	

	const showImage = useRef(null) 
	const intervalSlide = useRef(null)


	const {userData} = props


	useEffect (()=> {
 		async function loadImages (){
 			const response = await getImages;
 			setImages(response.data)
 			console.log(response.data)
 		}
 		loadImages()

 	},[])

 		

 		const next = ()=> {
 			const firstElement =  showImage.current.children[0];
 			const elementHeight = showImage.current.children[0].offsetHeight
 			
 			showImage.current.style.transition = '2500ms'
 			showImage.current.style.transform = `translateY(-${elementHeight}px)`

 			const trasitionFinished= () => {
 				showImage.current.style.transition = 'none';
 				showImage.current.style.transform = 'translateY(0)';
 				
 				showImage.current.appendChild(firstElement);


 				showImage.current.removeEventListener('transitionend', trasitionFinished);
 			}
 			
 			showImage.current.addEventListener('transitionend', trasitionFinished);

 		}

 		const previous = ()=>{
 			const index =  showImage.current.children.length-1;
 			const elementHeight = showImage.current.children[0].offsetHeight;
 			const lastElement= showImage.current.children[index];
 			showImage.current.insertBefore(lastElement,showImage.current.firstChild);

 			showImage.current.style.transition = 'none';
 			showImage.current.style.transform = `translateY(-${elementHeight}px)`
 			setTimeout(()=>{
 				showImage.current.style.transition = 'none';
 				showImage.current.style.transform = 'translateY(0)';
 			}, 30);
 		}

 		

		
 		useEffect(()=>{


 			
			intervalSlide.current = setInterval(()=>{
				next()}, 4000);

			showImage.current.addEventListener('mouseenter', (e)=>{
				clearInterval(intervalSlide.current);
				
				
			});

			showImage.current.addEventListener('mouseleave', ()=>{
				intervalSlide.current = setInterval(()=>{
				next()}, 4000);
			});


			}, [])
	 	

 		const getValue = (e)=>{
 			setValues(e.target.attributes[0].value)
 			for (let i=0; i<images.length; i++){
 				if(images[i].urls.small === values){
 					userData(images[i].user)
 				}
 			}
 			showImage.current.style.transition= '2000ms'
 			showImage.current.style.boxShadow= 'rgb(11 91 176) -10px 2px 20px, rgb(255 255 255) -2px -20px 7px';
 		}
 		const mouseEnter = ()=>{
 			showImage.current.style.transition= '2000ms'
 			showImage.current.style.left = '90vh'
 			showImage.current.style.width = '82vh'
 			showImage.current.style.height = '82vh'
 		}
 		const mouseLeave= ()=>{
 			showImage.current.style.transition= '2000ms'
 			showImage.current.style.left = '99.8vh'
 			showImage.current.style.width = '72vh'
 			showImage.current.style.height = '71vh'
 			showImage.current.style.boxShadow= ''	

 		}


	return(
			<div className= 'photoContainer' >
				<div className='photos' ref={showImage} >
					{images.map(image =>(
 						<img src={image.urls.small} onMouseOver ={mouseEnter} onMouseLeave={mouseLeave} onClick={getValue}/>
 					))}
				</div>
			</div>
		)
}