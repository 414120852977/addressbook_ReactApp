import React, {useState, useEffect} from 'react'
import ToolBar from './toolbar';
import CancelIcon from '../../assets/icons/cancelIcon.png'
import './addressbook-form.scss'
import AddressBookService from '../../service/addressbookservice';
import { useHistory,useParams, Link, withRouter } from 'react-router-dom';
const  AddressBookForm = (props) => {
    const addressbookService = new AddressBookService();
    let initialValue = {
        firstName: '',
        lastName: '',
        address: '',
        citys: '',
        state: '',
        zip: '',
        email: '',
        phoneNumber: '',
        isUpdate: false,
        error: {
            firstName: '',
            lastName: '',
            address: '',
            citys: '',
            state: '',
            zip: '',
            email: '',
            phoneNumber: ''
        }
    }
    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }
    const validData = async () => {
        let isError = false;
        let error = {
            firstName: '',
            lastName: '',
            address: '',
            citys: '',
            state: '',
            zip: '',
            email: '',
            phoneNumber: ''

        }

        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegex.test(formValue.firstName)) {
            isError = false;
        } else {
            error.name = 'Invalid  First Name'
            isError = true;
        }

        let lastnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (lastnameRegex.test(formValue.lastName)) {
            isError = false;
        } else {
            error.name = 'Invalid  lastName Name'
            isError = true;
        }

        let addressRegex = RegExp('^[A-Za-z0-9.]{1}[a-zA-Z0-9.\\s]{2,}$')
        if (addressRegex.test(formValue.address)) {
            isError = false;
        } else {
            error.address = 'Invalid Address'
            isError = true;
        }

        if (formValue.citys === '') {
            error.citys = 'City is required field'
            isError = true;
        }

        if (formValue.state === '') {
            error.state = 'State is required field'
            isError = true;
        }

        if (formValue.zip === '') {
            error.zip = 'Zipcode is required field'
            isError = true;
        }

        // let phoneNumberRegex = RegExp('^[1-9]\d{2}-\d{3}-\d{4}')
        // if (phoneNumberRegex.test(formValue.phoneNumber)) {
        //     isError = false;
        // } else {
        //     error.phoneNumber = 'Invalid Phone Number'
        //     isError = true;
        // }

        await setForm({ ...formValue, error: error })
        return isError;
    }
    
   const addressBookService = new AddressBookService();
   const history = useHistory();

    const params = useParams();
    console.log(params.id);

    useEffect(() => {
        if (params.id) {
            getPersonById(params.id);
        }
    }, []);

    const getPersonById = (id) => {
        console.log("getPersonById",id);
        addressBookService.getPersonById(id).then(responseData => {
            console.log("getByPerons Data", responseData.data)
            setForm({
                ...formValue,
                id: responseData.data.id,
                name: responseData.data.name,
                address: responseData.data.address,
                city: responseData.data.city,
                state: responseData.data.state,
                zipcode: responseData.data.zipcode,
                phoneNumber: responseData.data.phoneNumber,
                isUpdate: true
            })
            console.log(responseData.data)
        })
    }
       const save =async(event) => {
            event.preventDefault();
            if(await validData()) {
                console.log('error',formValue);
            return;
        }

       let object = {
           firstName: formValue.firstName,
           lastName: formValue.lastName,
           address: formValue.address,
           citys: formValue.citys,
           state:formValue.state,
           zip: formValue.zip,
           email:formValue.email,
           phoneNumber: formValue.phoneNumber
         }
         //new added code
         if (formValue.isUpdate) {
            addressbookService.updatePerson(params.id, object).then(response =>{
                console.log(response.data)
                alert("Data Updated Sucessfully", response.data);
                history.push("/");
                console.log("updated", response.data)
            }).catch(err => {
                alert("Error while updating data", err)
            })
        } else {
            //end code
            addressBookService.addingPerson(object).then(response => {
            alert("data added ...");
            history.push("/homePage");
             reset();
            
         }).catch(err => {
             console.log("error while adding try once...")
 
         })
    }
}
        
    
    const reset = () =>{
        setForm({...initialValue})
        console.log(formValue);
    }

 
        return (
            <div className="payroll-main" >
                <ToolBar />
    
                <div className="form-content">
                    <form className="form " action="#" onSubmit={save} >
                        <div className="form-head">
                            <div className="form-head-text">PERSON ADDRESS FORM</div>
                            <div className="cancel-img"><img src={CancelIcon} alt="cancelIcon" /></div>
                        </div>
    
                        <div className="row-content">
                            <label htmlFor="firstName" className="label text"></label>
                            <input type="text" className="input" value={formValue.firstName} onChange={changeValue} id="firstName" name="firstName" placeholder="first Name.." required />
                        </div>
                        <div className="error-output">{formValue.error.firstName}</div>

                        <div className="row-content">
                            <label htmlFor="lastName" className="label text"></label>
                            <input type="text" className="input" value={formValue.lastName} onChange={changeValue} id="lastName" name="lastName" placeholder="Last Name.." required />
                        </div>
                        <div className="error-output">{formValue.error.lastName}</div>
    
                        <div className="row-content">
                            <label htmlFor="address" className="label text"></label>
                            <input type="text" className="input" value={formValue.address} onChange={changeValue} id="address" name="address" placeholder="Address.." required
                                style={{ height: "80px" }} />
                        </div>
                        <div className="error-output">{formValue.error.address}</div>
                        <div className="row-content">
                            <label htmlFor="address" className="label text"></label>
                            <div>
                                <select id="citys" name="citys" value={formValue.citys} onChange={changeValue} required>
                                    <option value="">Select City</option>
                                    <option value="Agra">Agra</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Dehradun">Dehradun</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Lucknow">Lucknow</option>
                                    <option value="Mangalore">Mangalore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Mysore">Mysore</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Ranchi">Ranchi</option>
                                    <option value="Roorkee">Roorkee</option>
                                    
                                    
                                </select>
                                
                                <select id="state" name="state" value={formValue.state} onChange={changeValue} required>
                                    <option value="">Select State</option>
                                    <option value="Gujrat">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Maharastra">Maharastra</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                </select>
                                
                                <input type="number" className="input-code" onChange={changeValue} value={formValue.zip} id="zip" name="zip" placeholder="Zip Code.." required />
                            </div>
                                
                        </div>
    
                        <div className="row-content">
                            <label htmlFor="number" className="label text"></label>
                            <input type="text" className="input" value={formValue.phoneNumber} onChange={changeValue} id="phoneNumber" name="phoneNumber" placeholder="Phone Number.." />
                            <div className="error-output">{formValue.error.phoneNumber}</div>
                        </div>


                        <div className="row-content">
                            <label htmlFor="email" className="label text"></label>
                            <input type="email" className="input" value={formValue.email} onChange={changeValue} id="email" name="email" placeholder="email.." />
                            <div className="error-output">{formValue.error.email}</div>
                        </div>
                        <div className="button-parent">
                            <div className="add-reset">
                            <button className="button addButton" type="submit">Add</button>
                                <button type="reset" onClick={reset} className="button resetButton">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
    
            </div>
    
        );
    }
export default AddressBookForm;