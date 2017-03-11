import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'

//<Banner /> goes in 
//setting empty strings to store form inputs
var inputObj = {}



//setting up structure for the page, banner is a placeholder for the banner used by the rest of the site
//MhpForm is defined below
var MhpView = React.createClass({
	render: function() {
		return(
			<div className='body'>
				
				<MhpForm />
			</div>
		)
	}
})

//sets up the layout of the mhp submission form
var MhpForm = React.createClass({
	render: function() {
		return(
			<div className="mhpBody">
				<h2 className='formHeader'>
				Thank you for your interest in helping our veterans to recieve proper mental heathcare, 
				please fill out the form below so you can be added to our database of metal healthcare professionals.
				</h2>
				<form className="mhpForm">
					Name: <input type='text' className='nameInput'/>
					Email: <input type='text' className='emailInput'/>
					Phone #: <input type='text' className='phoneInput'/>
					Associated Clinic/Practice: <input type='text' className='clinicInput'/>
					Office Address: <input type='text' className='addressInput'/>
					Range of Payments Accepted Per Session:
					<input type='text' placeholder='min' className='minInput'/>
					<input type="text" placeholder='max' className='maxInput'/>
				</form>
				<button className='submitButton' onClick={this.submitData}>Submit</button>
			</div>
		)
	}
})

export default MhpView