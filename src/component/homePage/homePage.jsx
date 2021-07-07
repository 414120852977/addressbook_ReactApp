import React from 'react';
import ToolBar from '../../component/addressbook-form/toolbar';
import AddIcon from '../../assets/icons/addIcon.png';
import { Link ,withRouter } from 'react-router-dom';
import Display from './Display';
import AddressbookService from '../../service/addressbookservice';
class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            addressArray: [],
            serachExapand: ''
        }
        this.getPerson();
    }

    addressbooService = new AddressbookService();
    
    getPerson = () => {
        this.addressbooService.getPerson().then(responseData => {
            console.log("Data after get call", responseData.data);
            this.setState({ addressArray: responseData.data })
        }).catch(err => {
            console.log("Error while get", err);
        })
    }

    render() {
        return (
            <div>
                <ToolBar />
                <div className="header-content">
                    <div class="header-content sub-main-content">
                        <div class="add-detail-text">
                            Person Details <div class="person-count"></div>
                        </div>
                        <div className="row button-box">
                        
                        <Link to="addressbook-form" className="add-button">
                            <div class="plus-icon">
                                <img src={AddIcon} alt="Add Person Logo" />
                            </div>
                            <div>Add Person</div>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="table-main">
                    <Display addressArray={this.state.addressArray}></Display>
                </div>
            </div>
        )
    }

}
export default withRouter(HomePage);