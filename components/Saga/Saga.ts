import axios from "axios"
import { all, fork, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { getAirlines, getEarthQuake } from '../Api/FetchDataFromAPI';

function* getAirlinedata(action): any {

    try {

        //console.log(" saga")
        const res: any = yield call(getAirlines);
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

function* getEarthQuakedata(action): any {

    try {

        //console.log(" saga")
        console.log('calling earthquake data')
        const res: any = yield call(getEarthQuake);
        console.log(res.data, " EarthQuake Data")
        yield put({ type: "Fetch_EarthQuakeData", payload: res.data })

    } catch (error) {
        yield put({ type: "Error" })
        console.log(" error")
    }

}

function* EarthQuakeSaga() {
    yield takeEvery("Get_EarthQuake", getEarthQuakedata)
}


export default function* rootSaga() {
    yield all([fork(AirlineSaga), fork(EarthQuakeSaga),]);
}
