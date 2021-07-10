import React from 'react';
import './display.scss';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import { withRouter, useHistory } from 'react-router-dom';
import { element } from 'prop-types';
import AddressBookService from '../../service/addressbookservice';
const addressbookService = new AddressBookService();
const Display = (props) => {
           
     
    const history =useHistory();

    const remove = (id) => {
        addressbookService.deletePerson(id).then(responseData =>{
            alert("Employee deleted successfully",responseData.data);
            history.push("/homePage");
            addressbookService.getPerson();
        console.log("added");
        })
        
    }

    const update = (id) => {
        props.history.push(`/addressbook-form/${id}`)
    }

    return(

        
        <div className="table-main">
            <div>
            <img src={deleteIcon} onClick={() => remove(element.id)} alt="Delete" />
                </div>
            <table id="display" className="table">
            <tbody>
                <tr key={-1}>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>Address</th>
                    <th>Citys</th>
                    <th>State</th>
                    <th>zip</th>
                    <th>email</th>
                    <th>PhoneNumber</th>
                    <th>Actions</th>
                </tr>
                {
                    props.addressArray && props.addressArray.map((element, id) => (
                        <tr key={id}>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.address}</td>
                            <td>{element.citys}</td>
                            <td>{element.state}</td>
                            <td>{element.zip}</td>
                            <td>{element.email}</td>
                            <td>{element.phoneNumber}</td>
                            <td>
                                <img src={deleteIcon} onClick={() => remove(element.id)} alt="Delete" />
                                <img src={editIcon} onClick={() => update(element.id)} alt="Edit" />
                            </td>    
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default withRouter(Display);