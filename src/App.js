import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function App() {


  const api_key = '_epala6bzfchMcieAG_MshzIQo_8kapeQE5QRsfiw-g'
  const url = `https://api.unsplash.com/photos/random/?client_id=${api_key}&count=30`;


  const [ myImages, SetMyImages ] = useState([])

  const getImages = async () => 
  {
    const resp = await fetch(url);
    const data = await resp.json();
    // debugger
    const imagesUrl = data.map(image => {
      return {
        id: image.id,
        img: image.urls?.small
      }
    })
    // debugger
    return SetMyImages(imagesUrl)
  }

  useEffect(() => {
    getImages()
  }, [ ])
  
  
  // getImages()
  if(!myImages) return <h1>Loading...</h1>
  console.log(myImages)
  // getImages()
  // debugger
  console.log(LazyLoadImage)


  return (
    <div className="App">
      {
          myImages.map(({id, img}) => {
            return (
              <LazyLoadImage effect="blur" key={id} src={img } alt={id}/>

            )
          })
        }
    </div>
  );
}

export default App;
