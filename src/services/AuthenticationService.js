const AuthenticationService = () => {
    const authenticate = (userCredential) => {
        return new Promise((resolve, reject) => {
            resolve(userCredential)
        })
    }
    return {
        authenticate
    }
}

export default AuthenticationService;