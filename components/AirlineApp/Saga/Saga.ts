import axios from "axios"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

export function* getdata(action): any {

    //  yield put({ type: "Loading" })
    //setter
    try {

        //console.log(" saga")
        const res: any = yield call(axios.get, "https://api.instantwebtools.net/v1/airlines");
        //console.log(res.data, " saga")
        yield put({ type: "Fetch_AirlineData", payload: res.data })

    } catch (error) {
        yield put({ type: "Error" })
        console.log(" error")
    }

}

//getter
export function* rootSaga() {
    yield takeEvery("Get_Airlines", getdata)
}

