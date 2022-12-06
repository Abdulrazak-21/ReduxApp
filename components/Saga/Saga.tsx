import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"

export function* getdata(action): any {

    //  yield put({ type: "Loading" })
    try {

        //console.log(" saga")
        const res: any = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        //console.log(res.data, " saga")
        yield put({ type: "Fetch_success", payload: res.data })

    } catch (error) {
        yield put({ type: "Error" })
        console.log(" error")
    }

}


export function* rootSaga() {
    yield takeEvery("Get_Products", getdata)
}