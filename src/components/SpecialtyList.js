import React,  {useContext} from 'react';
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import SpecialtyItem from './SpecialtyItem';




const SpecialtyList = ({facultyId}) => {
    const {specialities, univercity_specialties} = useContext(Context)
    console.log(univercity_specialties.univercity_specialties)
    const filteredSpecialitiesId = univercity_specialties.univercity_specialties.filter(i => parseInt(i.faculty_id) === parseInt(facultyId))
    
    console.log(filteredSpecialitiesId )
    let ids = []
    for(let i = 0 ; i < filteredSpecialitiesId.length; i++) {
        ids.push(filteredSpecialitiesId[i].speciality_id)
    }
    let filteredSpecialities = []
    for(let i = 0; i < specialities.specialities.length; i++) {
        if(ids.includes(specialities.specialities[i].id)){
            filteredSpecialities.push(specialities.specialities[i])
        }
    }
    console.log(filteredSpecialities)
  
    return (

             <Row className="d-flex">
             {filteredSpecialities.map(specialities =>
             <SpecialtyItem key={specialities.id} specialities={specialities}/>
 )}
         </Row>
    );
};

export default SpecialtyList;