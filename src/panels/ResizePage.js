import { useState } from 'react';
import { FormItem, Group, Input, Panel, File, PanelHeader } from "@vkontakte/vkui"

const ResizePage = (id) => {


    const [Photoheight, setPhotoheight] = useState(512)
    const [Photowidth, setPhotowidth] = useState(512)
    const [img, setImg] = useState('')
    const [imagesrc, setimagesrc] = useState("")


    function resize(width, height) {
        let activeImage = new Image()
        activeImage.src = imagesrc

        activeImage.onload = () => {
            const canvas = document.getElementById("canvas")
            const canvasCtx = canvas.getContext("2d");

            canvas.width = Math.floor(width);
            canvas.height = Math.floor(height);

            canvasCtx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height));
            let base64 = canvas.toDataURL('image/png');
            setImg(base64)
        }


    }

    const fileSelect = (e) => {
        var FR = new FileReader();

        FR.addEventListener("load", function (e) {

            setimagesrc(e.target.result)
            resize(512, 512);



        });

        FR.readAsDataURL(e.target.files[0]);

    }

    const widhChane = (e) => {
        setPhotowidth(e.target.value)
        resize(e.target.value, Photoheight);
    }

    const heightChane = (e) => {
        setPhotoheight(e.target.value)
        resize(Photowidth, e.target.value);
    }


    return (
        <Panel id={id}>
            <PanelHeader>Размеры</PanelHeader>
            <Group>
                <canvas style={{display: "none"}} id='canvas' height={512} width={512}></canvas>
                <img id='image' src={img}></img>
                <FormItem top="↨">
                    <Input onChange={widhChane}></Input>
                </FormItem>
                <FormItem top="↔">
                    <Input onChange={heightChane}></Input>
                </FormItem>
                <FormItem top="">
                    <File onChange={fileSelect} controlSize="m">Выбрать фото </File>
                </FormItem>
            </Group>
        </Panel>
    )
}

export default ResizePage;