import React, { Component } from 'react';
import './ViewData.css';

class ViewData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Assuming this structure based on your previous data
      fireExtinguisherData: {
        missingFE: 3,
        safeFE: 5,
        maintenance: 2,
        lowBattery: 2,
        status: {
          parking: 1,
          '1st floor': 0,
          '2nd floor': 1,
          '3rd floor': 1,
          '5th floor': 0,
          canteen: 0,
          audi: 1,
          pathway: 1,
        },
      },
    };
  }

  downloadData = () => {
    const { fireExtinguisherData } = this.state;
    const jsonData = JSON.stringify(fireExtinguisherData, null, 2);

    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'fireExtinguisherData.json';
    link.click();
  };

  render() {
    const { fireExtinguisherData } = this.state;

    return (
        <div className='Main-class'>
          <div className="table-container">
            <h1>  Fire  Extinguisher  Data :</h1>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(fireExtinguisherData).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>
                      {typeof value === 'object'
                        ? Object.entries(value).map(([subKey, subValue]) => (
                            <div key={subKey}>
                              <strong>{subKey}:</strong> {subValue}
                            </div>
                          ))
                        : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={this.downloadData}>Download Data</button>
          </div>
        </div>
      );
    }
}

export default ViewData;

