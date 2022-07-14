const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const authValidation = {
    name: {
        required: {
            value: true,
            message: "Name cannot be empty"
        }
    },
    address: {
        required: {
            value: true,
            message: "Address cannot be empty"
        }
    },
    nic: {
        required: {
            value: true,
            message: "ID cannot be empty"
        }
    },
    email: {
        required: {
            value: true,
            message: "Email cannot be empty"
        },
        pattern: {
            value: regex.email,
            message: "Email is not valid"
        }
    },
    phone: {
        required: {
            value: true,
            message: "Phone number cannot be empty"
        }
    },
    password: {
        required: {
            value: true,
            message: "Password cannot be empty"
        },
        minLength: {
            value: 8,
            message: "Password length must be greater than 7"
        }
    },
    resume: {
        required: {
            value: true,
            message: "Resume cannot be empty"
        }
    }
}