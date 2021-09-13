import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Userform from './Userform';

const UserDetails = () => {
    const [ Name, setName ] = useState();
    const [ Surname, setSurname ] = useState();
    const [ Age, setAge ] = useState();
    const [ Location, setLocation ] = useState();
    const [ Description, setDescription ] = useState();
    const [ users, setUsers ] = useState([])
    const db = firebase.firestore();

    useEffect(() => {
        let userInfo = [];
        db.collection('users').get()
        .then((res) => {
            res.forEach(action => {
                userInfo.push({...action.data(), id: action.id});                
            })
            setUsers(userInfo);
        })
    },[])

    //delete user
    const deleteUser = (e) => {
        let uid = e.target.id

        db.collection('users').doc(uid).delete()
        .then(() => {console.log('user delete')})
        .catch((err) => {console.log(err)})
    }

    //update user
    const updateUser = (e) => {
        let uid = e.target.id

        db.collection('users').doc(uid).update({
            name: Name,
            surname: Surname,
            age: Age,
            location: Location,
            description: Description,
            key:uid
        })
        .then(() => { console.log('updated')})
        .catch((err) => {console.log(err)})
    }
 return(
    <>
    <div className={'cover mt-4'}>
    {
        users.map((action) => (
            <div className="card mt-4" key={ action.id}>
                <div className="card-header">
                    Registered user
                </div>
            <div className="card-body">
                <h5 className="card-title">User details</h5>
                <p className="card-text">{ action.name }</p>
                <p className="card-text">{ action.surname }</p>
                <p className="card-text">{ action.age }</p>
                <p className="card-text">{ action.location}</p>
                <p className="card-text">{ action.description}</p>
            <button id={ action.id } onClick={ deleteUser } className="btn btn-danger me-2">Delete</button>
            <button id={action.id} onClick={ updateUser } className="btn btn-success me-2">Update</button>
            </div>
            </div>
        ))
    }
</div>
</>
        )
    
}
export default UserDetails;