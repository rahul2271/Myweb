import React, { useState } from 'react';
import Image from 'next/image'
import Check from './check.gif'


const Form = () => {
  const [showTick, setShowTick] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    number: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Check if the phone number has exactly 10 digits
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!validatePhoneNumber(formData.number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setShowTick(true);

    const sheetDBEndpoint = 'https://sheetdb.io/api/v1/7tneevoxn7zax';

    try {
      const response = await fetch(sheetDBEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        setShowTick(true);
        // Reset form data
        setFormData({
            fullName: '',
            gmail: '',
            number: '',
            query: '',
          });

          // Hide tick animation after 2 seconds (adjust as needed)
        setTimeout(() => {
          setShowTick(false);
        }, 2000);
      } else {
        console.error('Failed to send data, Please fill all details (correctly)');
        alert('Failed to send data, Please fill all details (correctly)');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <form className='contactusform' onSubmit={handleSubmit}>
      <p>GET IN TOUCH</p>

      <div className="mb-3 mt-1">
        <label htmlFor="fullName" className="form-label">
          Your Name *
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-black border"
            id="fullName"
            name="fullName"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder='Jhon Dew'
            value={formData.fullName}
            onChange={handleChange} required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="gmail" className="form-label">
          E-mail *
        </label>
        <div className="input-group">
          <input
            type="email"
            className="form-control  bg-black border"
            id="gmail"
            name="gmail"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder='example@gmail.com'
            value={formData.gmail}
            onChange={handleChange} required
          />
        </div>
      </div>

      <div class="mb-3">
              <label for="basic-url" class="form-label">
                Phone Number *
              </label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control  bg-black border"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                  required
                  placeholder="8888XXXXXX"
                  name="number"
                  value={formData.number}
            onChange={handleChange} 
                />
              </div>{" "}
            </div>

      <div className="mb-3">
        <label htmlFor="query" className="form-label">
          Your Query *
        </label>
        <div className="input-group">
          <textarea
            type="text"
            className="form-control textarea  bg-black border"
            id="query"
            name="query"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder='Your Query Here !'
            value={formData.query}
            onChange={handleChange} required
          />
        </div>
      </div>

      <button type="submit">SEND</button>
    </form>


    {showTick && (
        <div className='messageok'>
        <div className="centered-div">
          <Image src={Check} alt="Check" id='check' />
        </div>
        </div>
      )}

    </>
  );
};

export default Form;
