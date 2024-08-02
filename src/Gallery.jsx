import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';



const images =[
    {src:"/7.jpg", alt:"1"},
    {src:"/2.jpg", alt:"2"},
    {src:"/3.jpg", alt:"3"},
    {src:"/20.avif", alt:"4"},
    {src:"/5.jpg", alt:"5"},
    {src:"/6.avif", alt:"6"},
    {src:"/1.png", alt:"Nepal"},
    {src:"/15.avif", alt:"8"},
    {src:"/4.avif", alt:"9"},
    {src:"/10.avif", alt:"10"},
    {src:"/11.avif", alt:"11"},
    {src:"/12.avif", alt:"12"},
    {src:"/13.avif", alt:"13"},
    {src:"/14.avif", alt:"14"},
    {src:"/15.jpg", alt:"15"},
    {src:"/16.avif", alt:"16"},
    {src:"/17.avif", alt:"17"},
    {src:"/18.avif", alt:"18"},
    {src:"/19.avif", alt:"19"},
    {src:"/7.avif", alt:"20"},
    {src:"/5.avif", alt:"21"}
]


export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom,lgAutoplay,lgFullscreen,lgRotate,lgShare]}
            >

                {images.map((image,index)=>{
                    return(
                        <a href={image.src} key={index} >
                        <img alt={image.alt} src={image.src} />
                    </a>
                    )
                })}

           
            </LightGallery>
        </div>
    );
}
