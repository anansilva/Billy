import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'

// const iconStyle = {
//   borderRadius: '50%',
//   backgroundColor: 'orange',
//   color: 'white',
//   height: '40px',
//   width: '40px',
//   padding: '8px'
// };

function Entries(props) {
  return (
    _.map(props, function(entry) {
      return (
        <div className="container entries-component" key={entry.id}>
          <div className="row entry-date">{entry.date}</div>
          <div className="row">
            <div className="col-sm entries-description">
                <button type="button" className="btn btn-danger btn-circle">
                  {entry.category === 'utilities' && <FontAwesomeIcon icon={faBolt}/>}
                  {entry.category === 'health_care' && <FontAwesomeIcon icon={faBriefcaseMedical}/>}
                </button>
              <span className="entry-description">{entry.description}</span>
            </div>
            <div className="col-sm entries-amount">
              {entry.amount}€
            </div>
          </div>
        </div>
      )
    })
  );
}

export default Entries;
