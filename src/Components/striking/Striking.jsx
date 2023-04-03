import React from 'react';
import "./striking.css";
import "./programFunctions";

const Striking = () => {
  return (
<>
    {/* striking section */}
    <div id='strikingContainer'>
        <h1 className="strikingTitle">Striking Programs</h1>
        <h3 id='readMoreStriking'>
            Learning to strike is more than just throwing a punch at someone's face or avoiding getting hit in your own. It requires a deep understanding of distance, footwork, countering, body mobility, and more. As your trainer, I bring years of experience to the table and can break down these complex concepts to fit your level of understanding.
            <br/><br/>
            Whether you're a seasoned athlete or a beginner, I have programs tailored to meet your goals. With my guidance, you'll learn to strike with precision and efficiency, all while having fun and staying motivated. So let's get started on your journey to mastering the art of striking!
        </h3>

        <ul id="strikingPrograms">
            <h3 id="strikingProgramTitle">Striking Programs</h3>
            <li id="strikingProgramItem">
                30 minutes: $50 per session
            </li>

            <li id="strikingProgramItem">
                60 minutes: $75 per session
            </li>

            <li id="strikingProgramItem">
                2x a week @ 30 minutes: $350 per session (Save $50)
            </li>

            <li id="strikingProgramItem">
                3x a week @ 30 minutes: $525 per session (Savings of $75)
            </li>

            <li id="strikingProgramItem">
                60 minutes: $100 per session
            </li>

            <li id="strikingProgramItem">
                2x a week @ 60 minutes: $600 per session (Savings of $100)
            </li>

            <li id="strikingProgramItem">
                3x a week @ 60 minutes: $900 per month (Savings of $150)
            </li>
        </ul>
    </div>

    {/* weight lifting section */}

    <div id='weightLiftingContainer'>
        <h1 className="weightLiftingTitle">Weight Lifting Programs</h1>
        <h3 id='readMoreMixedProgram'>
        Are you looking to build muscle, tone your body, trim down fat, and improve your mobility and flexibility? Let me help you achieve your fitness goals with a personalized workout plan tailored to your specific needs. With my expertise, I can introduce new exercises and techniques to keep your workouts fresh and effective, while also providing you with a clear understanding of the purpose behind each exercise. Whether you're a beginner or an experienced athlete, I can work with you to develop a plan that helps you achieve your fitness dreams. Let's work together to transform your body and improve your overall health and wellness.
        </h3>

        <ul id="strikingPrograms">
            <h3 id="weightLiftingProgramTitle">Striking Programs</h3>
            <li id="weightLiftingProgramItem">
                30 minutes: $50 per session
            </li>

            <li id="weightLiftingProgramItem">
                60 minutes: $75 per session
            </li>

            <li id="weightLiftingProgramItem">
                2x a week @ 30 minutes: $350 per session (Save $50)
            </li>

            <li id="weightLiftingProgramItem">
                3x a week @ 30 minutes: $525 per session (Savings of $75)
            </li>

            <li id="weightLiftingProgramItem">
                60 minutes: $100 per session
            </li>

            <li id="weightLiftingProgramItem">
                2x a week @ 60 minutes: $600 per session (Savings of $100)
            </li>

            <li id="weightLiftingProgramItem">
                3x a week @ 60 minutes: $900 per month (Savings of $150)
            </li>
        </ul>
    </div>

        {/* mixed program section section */}

        <div id='mixedProgramContainer'>
        <h1 className="mixedProgramTitle">Mixed Programs</h1>
        <h3 id='readMoreWeightLifting'>
            Looking to combine the benefits of both striking and weight lifting? My personalized program offers the perfect blend of both worlds. Whether you're looking to focus more on your striking skills while incorporating weights for added strength or using weights as the primary goal while incorporating striking as a cardio workout, I can tailor the program to meet your specific needs.<br/><br/>
            With my program, you can expect a well-rounded approach that includes mobility and flexibility exercises, along with new and challenging exercises to keep your workouts fresh and interesting. Plus, I will work with you to ensure that you understand the purpose of each exercise and how it will help you reach your fitness goals.<br/><br/>
            So, whether you want to improve your striking skills, build muscle and tone your body, or just get in shape, my program can help you achieve your goals. Contact me now to get started on your personalized workout plan.
        </h3>

        <ul id="mixedPrograms">
            <h3 id="mixedProgramTitle">Mixed Programs</h3>
            <li id="mixedProgramItem">
                60 minutes (30 minutes of each): $125 per session
            </li>

            <li id="strikingProgramItem">
                2x a week @ 30 minutes: $700 per month (Savings of $80)
            </li>

            <li id="strikingProgramItem">
                3x a week @ 30 minutes: $1,050per month (savings of $100) 
            </li>
        </ul>
    </div>
        <p className="endingDescription">Please note that prices can change at the discretion of the trainor and the client, feel free to communicate what it is you're looking for for a fitness package!</p>
    </>
  )
}

export default Striking