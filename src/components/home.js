import React, {useState, useCallback} from "react";
import {image} from "./data";
import  "../home.css";
import { Button } from "bootstrap";
import  Show  from "./show";

const Home = () => {
const [currentImage, setCurrentImage] = useState(image[0].ImageUrl);
const [name, setName] = useState(image[0].Name);
const [details, setDetails] = useState(image[0].ShortDesc)


const openImageViewer = useCallback((img) => {
    console.log(img.ImageUrl, img.Name, img.ShortDesc);
    {setCurrentImage(img.ImageUrl)}
    {setName(img.Name)}
    {setDetails(img.ShortDesc)}
   
    // setIsViewerOpen(true);
  }, []);


return(
     <div className="right">

        {/* <div> */}
         <Show
         pic ={currentImage}
         name ={name}
         details ={details}
        />
        {/* </div> */}

        <div className="allimage">
             <div className="prev">
                 <img className="previcon"
                 alt=""
                 src="https://www.svgrepo.com/show/500777/back.svg"
                 />
             </div>

         {image.map((img, index) =>(
        
             <div className="image">
                 <img className="image1"
                 key={index}
                 alt=""
                 src={img.ImageUrl}
                 //  onClick={(e) => openImageViewer(img.ImageUrl, img.Name)}
                 onClick={(e) => openImageViewer(img)}
                 />
             </div>
         ))}

             <div className="next"> 
                 <img className="nexticon"
                 alt=""
                 src="https://www.svgrepo.com/show/500945/next.svg"
                 />
             </div>
         </div>
     </div>
)}


// const Show = (props) => {

//     return(
//         <div>
//          <img
//          alt=""
//          src={props.pic}
//          />
//         </div>
//     )
// }



export default Home;









// import React, { useState, useCallback } from "react";
// import { image } from "./data";
// import "../home.css";
// import Show from "./show";

// const Home = () => {
//   const [currentImage, setCurrentImage] = useState(image[0].ImageUrl);
//   const [name, setName] = useState(image[0].Name);
//   const [details, setDetails] = useState(image[0].ShortDesc);
//   const [startIndex, setStartIndex] = useState(0);
//   const [numImagesToShow, setNumImagesToShow] = useState(3);

//   const openImageViewer = useCallback((img) => {
//     setCurrentImage(img.ImageUrl);
//     setName(img.Name);
//     setDetails(img.ShortDesc);
//   }, []);

//   const handlePrev = useCallback(() => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   }, [startIndex]);

//   const handleNext = useCallback(() => {
//     if (startIndex < image.length - numImagesToShow) {
//       setStartIndex(startIndex + 1);
//     }
//   }, [startIndex, numImagesToShow]);

//   return (
//     <div className="right">
//       <Show pic={currentImage} name={name} details={details} />

//       <div className="allimage">
//         <div className="prev" onClick={handlePrev}>
//           <img className="previcon" alt="" src="https://www.svgrepo.com/show/500777/back.svg" />
//         </div>

//         <div className="image-carousel">
//           {image.slice(startIndex, startIndex + numImagesToShow).map((img, index) => (
//             <div className="image" key={index}>
//               <img
//                 className="image1"
//                 alt=""
//                 src={img.ImageUrl}
//                 onClick={() => openImageViewer(img)}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="next" onClick={handleNext}>
//           <img className="nexticon" alt="" src="https://www.svgrepo.com/show/500945/next.svg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
