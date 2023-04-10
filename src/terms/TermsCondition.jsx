import React from 'react'
import "./termsCondition.css"

const TermsCondition = () => {
  return (
    <div id='termsContainer'>
     <h1 id='termsTitle'>Terms & Condition</h1>

    {/* Cancel Portion */}
     <div id='cancelContainer'>   
         <h2>Cancellation</h2>
         <p>I understand that unforeseen circumstances may arise, and I strive to accommodate my clients as best I can. However, to maintain professionalism and ensure time is respected, I have a cancellation policy in place.<br/><br/> 
            If a client needs to cancel an appointment, I require at least 24 hours' notice. If a client cancels multiple times, I reserve the right to charge a cancellation fee. Using discretion, the fee may be up to half of the scheduled session's price.<br/><br/>
            I appreciate clients' understanding and cooperation in adhering to our cancellation policy.
         </p>
     </div>

    {/* PARQ Form */}
     <div id='parqForm'>   
         <h2>Pre-Activity Readiness Questionaire Form</h2>
          <p>Working with the personal training site, I value your health and safety above all else. That's why I do require all new clients to complete a pre-activity readiness questionnaire form. This form is a series of questions designed to help us understand your current health status, medical history, and fitness goals, as well as to identify any potential risks or limitations that may affect your ability to participate in physical activity. By completing this form, you can ensure that I have all the information they need to design a program that is safe and effective for you.<br/><br/>
            The pre-activity readiness questionnaire form asks questions about your age, height, weight, exercise habits, medical conditions, medications, and previous injuries. I understand that this information is personal, but I assure you that it will be kept strictly confidential and will only be used to help me design the best program for you.<br/><br/>
            Completing the pre-activity readiness questionnaire form is a vital step in starting your fitness journey. I appreciate your cooperation and look forward to helping you achieve your fitness goals safely and effectively.
          </p>
     </div>

    {/* Tardiness */}
     <div id='tardiness'>   
         <h2>Tardiness</h2>
         <p>Understanding that sometimes things happen that are beyond your control, and you may be late for a training session. However, want to ensure that all clients receive the best possible experience and are able to complete their scheduled sessions in a timely manner. Therefore, we ask that you arrive on time for your scheduled sessions.<br/><br/>
          If you are going to be late, please notify me as soon as possible. If you arrive within 10 minutes of your scheduled session, I will do my best to accommodate you and still provide the full sessions.<br/><br/>
          However if you arrive more than 10 minutes late, the right is then reserved to cancel the session and the cancellation policy will be activated. 
         </p>
     </div>

    {/* Refunds */}
     <div id='refunds'>   
         <h2>Refunds</h2>
         <p>The refunds section of my terms and policy page is designed to provide clarity on my policies regarding cancellations and refunds. I want my clients to know that I do honor refunds if cancellations are placed at a reasonable time.<br/><br/>
            However, it is important to note that my cancellation policy may still be in effect based on the timing of the cancellation. I strive to provide fair and reasonable refund options to ensure customer satisfaction.<br/><br/>
            Please review my cancellation policy for more information on my terms and conditions. 
         </p>
     </div>

    {/* Pricing Change */}
     <div id='pricingChange'>   
         <h2>Pricing Changes</h2>
         <p>Please note that the pricing for my products or services is subject to change at any time without prior notice. As the sole proprietor of this business, I reserve the right to adjust prices based on market conditions, industry trends, and other factors.<br/><br/>
            I will make every effort to notify my clients in advance of any price changes, but it is ultimately the client's responsibility to regularly check for updates on pricing. Rest assured, I am committed to providing fair and competitive pricing for all of my offerings.<br/><br/>
            If you have any questions about my pricing policies, please don't hesitate to contact me.
         </p>
     </div>
    </div>
  )
}

export default TermsCondition