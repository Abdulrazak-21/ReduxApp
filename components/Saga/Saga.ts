import axios from "axios"
import { all,fork,call, put, takeEvery, takeLatest } from "redux-saga/effects"

function* getAirlinedata(action): any {

    try {

        //console.log(" saga")
        const res: any = yield call(axios.get, "https://api.instantwebtools.net/v1/airlines");
        //console.log(res.data, " saga")
        yield put({ type: "Fetch_AirlineData", payload: res.data.slice(0, 500) })

    } catch (error) {
        yield put({ type: "Error" })
        console.log(" error")
    }

}

function* AirlineSaga() {
    yield takeEvery("Get_Airlines", getAirlinedata)
}

function* getMuesumdata1(action): any {

    try {
        console.log('called getMuesumdata1')

        //console.log(" saga")
        const res: any = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        //console.log(res.data, " saga")
        yield put({ type: "Fetch_MuesumData1", payload: res.data.slice(0, 10) })

    } catch (error) {
        yield put({ type: "Error" })
        console.log(" error")
    }

}

function* muesumSaga1() {
    yield takeEvery("Get_Muesum1", getMuesumdata1)
}

function* getMuesumdata2(Items): any {
    console.log(Items)

    try {

        //console.log(" saga")
        const res: any = yield call(axios.get, `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Items}`);
        //console.log(res.data, " saga")
        yield put({ type: "Fetch_MuesumData2", payload: res.data.slice(0, 500) })

    } catch (error) {
        yield put({ type: "Error" })
        console.log(" error")
    }

}

function* muesumSaga2() {
    yield takeEvery("Get_Muesum2", getMuesumdata2)
}


export default function* rootSaga(){
    yield all ([fork(AirlineSaga),fork(muesumSaga1),fork(muesumSaga2)]);
}