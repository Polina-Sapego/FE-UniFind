import {makeAutoObservable} from "mobx";

export default class UniversityStore {
        _id;
        _name;
        _adress;
        _manager_id;
        _coords;

    constructor() {
        makeAutoObservable(this)
    }

    setId(id) {
        this._id = id;
    }

    setName(name) {
        this._name = name;
    }

    setAdress(adress) {
        this._adress = adress;
    }

    setManagerId(manager_id) {
        this._manager_id = manager_id;
    }

    setCoords(coords) {
        this._coords = coords;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get adress() {
        return this._adress;
    }

    get manager_id() {
        return this._manager_id;
    }

    get coords() {
        return this._coords;
    }

}