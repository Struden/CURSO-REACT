    import axios  from "axios";
    
    const fetchingData = async () => {
        try{
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            return response.data;
        } catch(error) {
            throw error;
        }
    }

    export { fetchingData }