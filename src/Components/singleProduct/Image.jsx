import React,{useState,useEffect} from 'react'
import './Image.css';

const Image = ({image = []}) => {

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (image.length > 0) {
      setMainImage(image[0]);
    }
  }, [image]);  

  return (
    <div className='imageContainer'>
      <div className='more-images'>
          {image.map((img,index) => {
              return(
                  <figure  key={index}>
                      <img src={img.url} alt={img.filename} className='singleImage' onClick={() => setMainImage(img)}/>
                  </figure>
              )
          })}
      </div>
      <div>
      {mainImage ? (
          <img src={mainImage.url} alt={mainImage.filename} className="main-Image" />
        ) : (
          <p>Loading image...</p> 
        )}
      </div>
    </div>
  )
}

export default Image
