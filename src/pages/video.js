import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'

const Video = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div style={{textAlign: 'center'}}>
    <h1>YouTube Video Demo - Modal</h1>
    <p>Use <a href="https://appleple.github.io/react-modal-video/">"react-modal-video"</a></p>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="GDa8kZLNhJ4" onClose={() => setOpen(false)} />
    <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
    </div>
  );
}
 
export default Video;