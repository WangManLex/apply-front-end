import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const JobForm = (props) => {
   const navigate = useNavigate()
   const [formData, setFormData] = useState({
      company: props.company._id,
      jobTitle: '',
      description: '',
      salary: '',
      employmentType: '',
      categories: '',
   })

   const handleChange = e => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }

   const handleSubmit = async e => {
      e.preventDefault()
      try {
         props.handleAddJob(formData)
         // change this to job details!!!
         navigate('/companies')
      } catch (err) {
         props.updateMessage(err.message)
      }
   }

   return (
      <>
         <h1 className="flex justify-center">Job Form Working</h1>
      </>
   );
}

export default JobForm;