const init = {
    loading: true,
    data: [],
    error: " ",
    muesumdata1:[],
    muesumdata2:[],
    muesumerror:" ",
    muesumloading1: false,
    muesumloading2:false,
    
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
                muesumloading1: false,
                muesumdata1: action.payload,
                muesumerror: " "
            }
        }
        case "Fetch_MuesumData2": {
            return {
                muesumloading2: false,
                muesumdata2: action.payload,
                muesumerror: " "
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