import react, {useState, useEffect, useRef} from 'react';
import axios from 'axios';


	const key = 'Iy4HwX6lNgzjEWx1za_VQooiBq2Kul7SXJ21WASFUPA'
	const url = `https://api.unsplash.com/photos/?client_id=${key}`;

async function getImages (){
	const response = await axios ({
			url: url
		})
	return response
};


export default getImages();