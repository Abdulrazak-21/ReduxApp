const init = {
    loading: true,
    data: [],
    error: " ",
    earthquakedata: [],
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
        case "Fetch_EarthQuakeData": {
            return {
                loading: false,
                earthquakedata: action.payload,
                error: " "
            }
        }
        case "Fetch_MuesumData2": {
            return {
                loading: false,
                muesumdata2: action.payload,
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
        default:
            return state;
    }
}