import React from 'react';
import './display.scss';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import { withRouter } from 'react-router-dom';
import { element } from 'prop-types';
const Display = (props) => {

    return(
        <div className="table-main">
            <table id="display" className="table">
            <tbody>
                <tr key={-1}>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>zipcode</th>
                    <th>PhoneNumber</th>
                    <th>Actions</th>
                </tr>
                {
                    props.addressArray && props.addressArray.map((element, id) => (
                        <tr key={id}>
                            <td>{element.name}</td>
                            <td>{element.address}</td>
                            <td>{element.city}</td>
                            <td>{element.state}</td>
                            <td>{element.zipcode}</td>
                            <td>{element.phoneNumber}</td>
                            <td>
                                <img src={deleteIcon} alt="Delete" />
                                <img src={editIcon} alt="Edit" />
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