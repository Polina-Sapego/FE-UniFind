import {makeAutoObservable} from "mobx";

export default class UniversityStore {
        // _id;
        // _name;
        // _adress;
        // _manager_id;
        // _coords;

    constructor() {
        this._university = [
        ]
        this._faculties = [
             
        ]
       
        this._specialities = [
            
        ]

        this._univercity_specialties = [
            {id:1, faculty_id: 6, speciality_id: 20},
            {id:2, faculty_id: 6, speciality_id: 21},
            {id:3, faculty_id: 6, speciality_id: 22},
            {id:4, faculty_id: 6, speciality_id: 23},
            {id:5, faculty_id: 6, speciality_id: 24},
            {id:6, faculty_id: 6, speciality_id: 25},
        ]
        // this._name =[]
        // this._id = []
        // this._adress = []
        // this._manager_id = []
        // this._coords = []
        makeAutoObservable(this)
    }

    setUniversities(university) {
        this._university = university;
    }

    setFaculties(faculties) {
        this._faculties = faculties;
    }
    get university() {
        return this._university
    }

    get faculties() {
        return this._faculties
    }

    get specialities() {
        return this._specialities
    }

    setSpecialities(specialities) {
        this._specialities = specialities;
    }

    setUnivercity_specialties(univercity_specialties) {
        this._univercity_specialties = univercity_specialties;
    }

    get univercity_specialties() {
        return this._univercity_specialties;
    }
    // setSpecialities(pecialities ) {
    //     this._adress = adress;
    // }

    // setManagerId(manager_id) {
    //     this._manager_id = manager_id;
    // }

    // setCoords(coords) {
    //     this._coords = coords;
    // }

    // get id() {
    //     return this._id;
    // }

    // get name() {
    //     return this._name;
    // }

    // get adress() {
    //     return this._adress;
    // }

    // get manager_id() {
    //     return this._manager_id;
    // }

    // get coords() {
    //     return this._coords;
    // }

}