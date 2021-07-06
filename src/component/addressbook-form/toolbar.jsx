import React from 'react'
import logo from '../../assets/icons/addressbookLogo.png';
class ToolBar extends React.Component {
    render() {
        return(
            <div>
                <header className="header header-content">
                    <div className="logo-content">
                        <img src={logo} alt="Logo" />
                        <div>
                            <span className="emp-text">ADDRESS</span><br />
                            <span className="emp-text emp-payroll">BOOK</span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default ToolBar;