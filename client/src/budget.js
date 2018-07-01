import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

function Budget(props) {
  return (
    <div className="row align-items-center budget-component">
      <div className="col-sm">
        <button type="button" className="btn btn-primary btn-circle">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="col-sm">
        {props.availableBudget}€
      </div>
      <div className="col-sm">
        <button type="button" className="btn btn-secondary btn-circle">
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
    </div>
  );
}
Budget.propTypes = {
  availableBudget: PropTypes.number.isRequired
}

export default Budget;
