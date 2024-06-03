const Validation = (values) => {
    const error = {};
    if (!values.username) {
        error.username = "Username is required";
    }
    if (!values.email) {
        error.email = "Email is required";
    }
    if (!values.password) {
        error.password = "Password  is required";
    }
    return error;
}
export default Validation;