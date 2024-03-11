import React from 'react'
import img from '../Images/petcare.png'
import round from '../Images/round.png'
import pet from '../Images/petpoints.png'
import '../CSS/pet.css'
function PetCare() {
  return (
    <section className='pet-care'>
        <div className="content d-flex">
            <div className="col-lg-6 image-sec ">
                <img src={img} alt='-' width={650}/>  
            </div>
            <div className="col-lg-6 content-sec d-block">
    <div>

                <h1 className='' >WE CARE ABOUT YOUR PET </h1>
                <img src={round} alt='-' className='round' />
    </div>
    <div className="points-sec">
      <img src={pet} alt='-' className='pointsimg' /> 
      <p>

-12 years as Restaurant General Manager and 22 years in the industry<br/>

-Volunteer with Salthaven.<br/>

-Former President of LDOA.<br/>

-Volunteers with other Animal Welfare committees and groups.

      </p>
    </div>

            </div>
        </div>
        
    </section>
  )
}

export default PetCare