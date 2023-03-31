import React from 'react'
import "./parqStyling.css";

const ParQForm = () => {
  return (
    <div id='parQContainer'>
        <h1 id="parQTitle">Pre-Activity Readiness Questionnaire Form (PAR-Q-Form)</h1>
        <form action="https://formsubmit.co/jeff.bozierjr@gmail.com" id='parqForm' method='POST' encType='multipart/form-data'>
        <section className="parqSection personDetailsContainer">
            <h2 id='sectionTitle'>Personal Details</h2>

          <div className="inputContainer">
            <input name='First Name' id='parqInput' type="text" />
            <span aria-required="true" id='parqLabel' name="firstName">First Name</span>
          </div>

          <div className="inputContainer">
            <input name='Middle Name' id='parqInput' type="text" />
            <span  id='parqLabel' name="middleName">Middle Name</span>
          </div>

          <div className="inputContainer">
            <input name='Last Name' id='parqInput' type="text" />
            <span aria-required="true" id='parqLabel' name="lastName">Last Name</span>
          </div>

          <div className="inputContainer">
            <input name='birthdate' id='parqInput' type="date" />
            <span aria-required="true" id='parqLabel' name="dob">Date of Birth</span>
          </div>

          <div className="inputContainer">
            <input name='Age' id='parqInput' type="number" />
            <span aria-required="true" id='parqLabel' name="age">Age</span>
          </div>

          <div className="inputContainer">
            <input name='gender' id='parqInput' type="text" />
            <span aria-required="true" id='parqLabel' name="gender">Gender</span>
          </div>

          <div className="inputContainer">
            <input name='address' id='parqInput' type="text" />            
            <span id='parqLabel' name="address">Address</span>
          </div>

          <div className="inputContainer">
            <input name='city' id='parqInput' type="text" />
            <span aria-required="true" id='parqLabel' name="city">City</span>
          </div>

          <div className="inputContainer">
            <input name='zip code' id='parqInput' type="number" />
            <span aria-required="true" id='parqLabel' name="zipCode">Zip Code</span>
          </div>

          <div className="inputContainer">
            <input name='email' id='parqInput' type="email" />
            <span aria-required="true" id='parqLabel' name="email">Email</span>
          </div>

          <div className="inputContainer">
            <input name='Contact Number' id='parqInput' type="tel" />
            <span aria-required="true" id='parqLabel' name="contactNumber">Contact Number</span>
          </div>

        <div className="emergencyContact">
        <div className="inputContainer">
            <input name='Emergency Contact' id='parqInput' type="text" />
            <span aria-required="true" id='parqLabel' name="emergencyContact">Emergency Contact</span>
        </div>

        <div className="inputContainer">
            <input name='Emergency Contact Number' id='parqInput' type="tel" />
            <span aria-required="true" id='parqLabel' name="emergencyContactTel">telephone</span>
        </div>
        </div>
        </section>    

        {/* medical section */}
        <section className="parqSection medicalContainer">
            <h2 id='sectionTitle'>Medical Questions</h2>
            <p>Answer the following questions as honestly as you can and provide as much relevant additional information. Answer the following questions by placing a tick in either the <strong>Yes</strong> or <strong>No</strong> boxes (if you should answer <strong>Yes</strong> to any of the questions please provide further information in the space provided)</p>
            <h3 className="descriptionA"><em>Do you currently or have you ever suffered from any of the following conditions?</em></h3>
            <aside className='innerInput'>if <strong>Yes</strong>, please provide details below <input type="text"/></aside>
            <ol type='I' className="medicalChecklist">
                <li>
                    <div class="question">
                      <label htmlFor="heart-problems">Heart Problems</label>
                    </div>
                    <div class="checkboxes">
                      <label>
                        <input type="checkbox" className='checkbox' name="heart-problems" value="yes"/> Yes
                      </label>
                      <label>
                        <input type="checkbox" className='checkbox' name="heart-problems" value="no"/> No
                      </label>
                    </div>
                </li>
                
                <li>
                    <div class="question">
                      <label for="heart-problems">Heart Problems</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="heart-problems" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="heart-problems" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="circulatory-problems">Circulatory problems</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="circulatory-problems" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="circulatory-problems" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="blood-pressure">Blood pressure problems?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="blood-pressure" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="blood-pressure" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="mobility">Joint, movement problems?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="mobility" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="mobility" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="pregnant">Currently pregnant or recently given birth?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="pregnant" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="pregnant" value="no"/> No</label>
                    </div>
                </li>
            </ol>

        {/* health checklist */}
            <aside className='innerInput'>if <strong>Yes</strong>, please provide details below <input type="text" placeholder='enter Here'/></aside>
            <ol type='I' className="healthChecklist">
                <li>
                    <div class="question">
                      <label for="spine">Back/spinal pain?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="spine" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="spine" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="headaches">Headaches or migraines?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="headaches" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="headaches" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="past-injury">Have you recently had surgery?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="past-injury" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="past-injury" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="medication">Currently being prescribed medication?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="medication" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="medication" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="finished-medication">Recently finished a course of medication?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="finished-medication" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="finished-medication" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="diabetes">Diabetes?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="diabetes" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="diabetes" value="no"/> No</label>
                    </div>
                </li>

                <li>
                    <div class="question">
                      <label for="asthma">Asthma or breathing problems?</label>
                    </div>
                    <div class="checkboxes">
                      <label><input type="checkbox" className='checkbox' name="asthma" value="yes"/> Yes</label>
                      <label><input type="checkbox" className='checkbox' name="asthma" value="no"/> No</label>
                    </div>
                </li>
            </ol>
        <input placeholder='enter' type="text" />
        <label htmlFor="">Is there any other reason that you believe may prevent you from participating</label>
        </section>

        <section className='parqSection' id="declaration">
            <h2 id='sectionTitle'>Declaration</h2>
            <p>I have answered all questions in this form honestly and I am aware that if I have answered <strong>yes</strong> to any of the questions, I will need to consult my PCP before commencing an exercise program if I am affected by any of the questions mentioned in this form or at a later date I agree to inform my personal trainer on any changes in health or fitness.</p>
            <div id="signing">

            <div className="inputContainer">
                <label htmlFor="">Signed:</label>
                <input name='signed' type="text"/>
            </div>
            
            <div className="inputContainer">
                <label htmlFor="">Print Name:</label>
                <input name='print Name' type="text" />
            </div>

            <div className="inputContainer">
                <label htmlFor="">Date:</label>
                <input name='date' type="date" />
            </div>

            <div className="inputContainer">
                <label htmlFor="">Instructor:</label>
                <input name='instructor' type="text" />
            </div>

            <div className="inputContainer">
                <label htmlFor="">Print Name:</label>
                <input name='namePrint' type="text" />
            </div>

            <div className="inputContainer">
                <label htmlFor="">Date</label>
                <input name='signed date' type="date" />
            </div>
            </div>
        </section>

        <button type="submit" id="submitButton">Send</button> 
        </form>
    </div>
  )
}

export default ParQForm