function fetchUser(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Gowtham")
        }, 2000)
    })
}

fetchUser()
    .then((user) => {
        console.log(user)
    })