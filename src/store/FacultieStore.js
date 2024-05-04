import {makeAutoObservable} from "mobx";

export default class UniversityStore {

    constructor(){
        makeAutoObservable(this);
    }
}