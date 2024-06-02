const createError = (status, message) =>{
    return {
        status,
        message
    }
}

export default createError;