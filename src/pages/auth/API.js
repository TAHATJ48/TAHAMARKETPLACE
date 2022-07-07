export const deleteToken = () => {
    return localStorage.removeItem('token');
}

export const getToken = () => {
    return localStorage.getItem('token')
}
export const LoginAPI = async ({ email, password }) => {

    let response = await fetch(`https://api.edu.etherial.dev/api/ecommerce/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json
}
export const signin = async ({ firstname, lastname, email, password}) => {

    let response = await fetch(`https://api.edu.etherial.dev/api/ecommerce/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname : firstname,
            lastname: lastname,
            email: email,
            password: password,
            password_verif: password,
        })
    })

    let json = await response.json()

    return json

}

export const UserOrders = async () => {
    const response = await fetch(`https://api.edu.etherial.dev/api/ecommerce/users/me/orders`, {
        method: "GET",
        headers : {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await response.json()
    return json
}


export const UserInfo = async () => {
    const response = await fetch(`https://api.edu.etherial.dev/api/ecommerce/users/me`, {
        method: "GET",
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await response.json()
    return json
}
