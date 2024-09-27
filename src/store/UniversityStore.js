import {makeAutoObservable} from "mobx";

export default class UniversityStore {
       
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
    
}