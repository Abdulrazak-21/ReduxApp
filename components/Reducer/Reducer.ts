const init = {
    loading: true,
    data: [],
    error: " ",
    muesumdata1:[],
    muesumdata2:[],
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
        case "Fetch_MuesumData1": {
            return {
                loading: false,
                muesumdata1: action.payload,
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