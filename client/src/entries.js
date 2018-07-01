import React from 'react';
import _ from 'lodash';

function Entries(props) {
  return (
    _.map(props, function(entry) {
      return (
        <div className="container entries-component" key={entry.id}>
          <div className="row entry-date">{entry.date}</div>
          <div className="row">
            <div className="col-sm">
              {entry.category}
            </div>
            <div className="col-sm">
              {entry.description}
            </div>
            <div className="col-sm">
              {entry.amount}
            </div>
          </div>
        </div>
      )
    })
  );
}

export default Entries;
