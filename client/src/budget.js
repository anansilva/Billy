import React from 'react';
import PropTypes from 'prop-types';

function Budget(props) {
  return (
    <div className="row input-group">
      <div className="col-sm">
        <button type="button" className="btn btn-primary btn-circle">
          btn here
        </button>
      </div>
      <div className="col-sm">
        {props.value}
      </div>
      <div className="col-sm">
        <button type="button" className="btn btn-secondary btn-circle">
          btn here
        </button>
      </div>
    </div>
  );
}
Budget.propTypes = {
  value: PropTypes.number.isRequired
}

export default Budget;
