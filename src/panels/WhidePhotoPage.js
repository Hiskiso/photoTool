import {Button, Group, Panel, PanelHeader, Title} from "@vkontakte/vkui";
import React, { useState } from 'react';
  


const WhidePhoto = (id)=>{

    const [Allert, setAllert] = useState()
    const [ , setPhotoEnecoded] = useState()
    const [whg, setwhg] = useState(window.screen.width-12)
	const [canvas, ] = useState(document.createElement("canvas"))
	const [video, ] = useState(document.createElement("video"))
	const [streaming, setStreaming] = useState(false)
	const [imageData, setImageData] = useState('')
	const widthVid = 320
	const [heightVid, setHeightVid] = useState()

  
   
 async function initCam(){
	  
	await navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then(async function(stream) {

			
		setHeightVid(widthVid / (4/3))
	
  
	video.setAttribute('width', whg);
	video.setAttribute('autoplay', true);
	video.setAttribute('height', heightVid);
	canvas.setAttribute('width', whg);
	canvas.setAttribute('height', heightVid);

	  video.srcObject = stream;
	  await setStreaming(true)



	})
	.catch(function(err) {
		console.log(err);
        setAllert(<Title>Разрешите доступ к фото</Title>)
	});

  }
async	function takePhoto(){
		 
	  if(streaming){
	 
		var context = canvas.getContext('2d');
		context.translate(canvas.width, 0);
		context.scale(-1, 1);
		context.drawImage(video, 0, 0, whg, heightVid);
		var base64dataUrl = canvas.toDataURL('image/png');
		setImageData(base64dataUrl)
	 
	   setPhotoEnecoded(base64dataUrl)

		
	}}

    window.resizerr = (wh)=>{setwhg(wh)}

    return (
        <Panel id={id}>
            <PanelHeader>Широкое фото</PanelHeader>
            <Group>
     <img src={imageData}></img>
        <Button  onClick={()=>{initCam(); takePhoto()}} stretched>Фото</Button>

            {Allert}
            </Group>
        </Panel>
        )
}

export default WhidePhoto;