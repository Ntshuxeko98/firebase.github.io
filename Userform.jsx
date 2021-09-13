import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Userfom = () => {

    const [ Name, setName ] = useState();
    const [ Surname, setSurname ] = useState();
    const [ Age, setAge ] = useState();
    const [ Location, setLocation ] = useState();
    const [ Description, setDescription ] = useState();
    
    const db = firebase.firestore();


    
    const getname = (e) => {
        setName(e.target.value)
    }

    const getsurname = (e) => {
        setSurname(e.target.value)
    }

    const getage = (e) => {
        setAge(e.target.value)
    }

    const getlocation = (e) => {
        setLocation(e.target.value)
    }

    const getdescription = (e) => {
        setDescription(e.target.value)
    }

    const createUser = (e) => {
        e.preventDefault();
        db.collection('users').add({
            name: Name,
            surname: Surname,
            age: Age,
            location: Location,
            description: Description
        })
        .then((res) => {console.log('Successful')})
        .catch((err) => {console.log(err)})
    }

    return (
        
    <>
    <div className={"container mt-5"}>
        <h2>Register User</h2>
    <form onSubmit={createUser}>
    <div className=" cover col-md-4">
        <h1>
    <input name='name' onChange={getname} type="text" placeholder="First names" className="form-control"/>
    </h1>
    <h1>
    <input name='surname' onChange={getsurname} type="text" placeholder="Surname" className="form-control"/>
    </h1>
    <h1>
    <input name='age' onChange={getage} type="text" placeholder="Age" className="form-control"/>
    </h1>
    <h1>
    <label className="visually-hidden" for="autoSizingSelect">Gender</label>
    <select className="form-select" id="autoSizingSelect">
      <option selected>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
    </h1>
    <h1>
    <input name='location' onChange={getlocation} type="text" placeholder="Location" className="form-control"/>
    </h1>
    <h1>
    <input name='location' onChange={getdescription} type="text" placeholder="Description" className="form-control"/>
    </h1>
    <h1>
    <button type="submit" className="btn btn-primary">Add</button>
    </h1>
    </div>
    </form>
    </div>
</>
    )
   
    
}
export default Userfom;