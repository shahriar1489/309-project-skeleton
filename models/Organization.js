var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrganizationSchema = {

  user: {
    type: Schema.ObjectId,
    ref: 'User' // exclusive for 'user'
  },  // a reference to whoever created it & only that person can modify the content 

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  location: {
    type: String, // use google earth
    default: '',
    trim: true,
    required: 'Location required'

  },

  contact: {
    //type: Schema.ObjectId,
    type: String,
    default:'',
    
  },

  created: {  // need this 
    type: Date,
    default: Date.now
  },
  
  totalCamps: {
    type: Number, // one object can have only one data type 
    required: ''
    
  }, // use Google Earth to mark the camps
  
  nameOfCamp: {
    type: String,
    required: ''
  },
  
  socialMediaUrl: {
    type: String,
    required: 'Enter Link to Verified Social Media Page'
  },
  
  goal: { // make organizations share their definite goals on working with the refugeee camp
    type: String,
    default: '',
    
  }
  
}

var Organization = mongoose.model('Organization', OrganizationSchema, 'organizations');
module.exports = Organization;
