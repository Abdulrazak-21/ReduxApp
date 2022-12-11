const init = {
    loading: true,
    data: [],
    error: " "
}

export const reducer = (state = init, action: any) => {

    switch (action.type) {

        case "Loading": {
            return {
                loading: true,
                data: [],
                error: " "
            }
        }

        case "Fetch_AirlineData": {
            return {
                loading: false,
                data: action.payload,
                error: " "
            }
        }

        case "Error": {
            return {
                loading: false,
                data: [],
                error: "Something went wrong"
            }
        }
    }
}