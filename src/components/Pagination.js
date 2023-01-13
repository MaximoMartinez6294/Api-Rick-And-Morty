import React from 'react'

const Pagination = ({prev, next, onPrevius, onNext}) => {

  const handlePrevious = () => {
    onPrevius();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        
         {  prev ? (
         <li className="page-item">
          <button className="page-link" onClick= {handlePrevious}>
            Previus
          </button>
         </li>
         ) : null}

         {
          next ? (
          <li className="page-item">
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
          </li>
         ) : null}
                           
      </ul>
    </nav>
  )
}

export default Pagination
