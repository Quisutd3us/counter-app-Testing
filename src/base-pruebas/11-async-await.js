

export const getImagen = async() => {

    try {

        const apiKey = 'HJodTkir6KSOa1rLfWU87uwG8Sv48X9M';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url

    } catch (error) {
        // Error manage
        return 'Dont exist the image'
    }
    
    
    
}

 getImagen();



