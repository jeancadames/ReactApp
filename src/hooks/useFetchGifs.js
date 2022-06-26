import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImage = async() => {
        const newImages = await getGifs(category); 
        setImages(newImages);
        setIsLoading(false)
    }

    //este hook sirve para que realice la solicitud y carga al http de los API unicamente cuando se cargue la pantalla y no siempre cuando suceda un cambio
    useEffect(()=>{
        getImage();
    },[])
    // las [] sirven para introducir las dependencias de cuando quieres que se disparen los efectos secundarios, al dejarlos vacia unicamente la primera vez cuando se carguen y creen los componentes

    return {
        images,
        isLoading
    }
}
