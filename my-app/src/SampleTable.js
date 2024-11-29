import React from 'react';

const SampleTable = () => {
  // Sample data to populate the table
  const data = [
    {
      adSet: 'Ad Set 1',
      biddingStatus: 'Active',
      boost: 'High',
      impressions: 1500,
      clicks: 120,
      spend: 300,
      installs: 25,
      cpi: 12,
      mmpInstalls: 20,
      skanInstalls: 5,
    },
    {
      adSet: 'Ad Set 2',
      biddingStatus: 'Paused',
      boost: 'Low',
      impressions: 1000,
      clicks: 80,
      spend: 200,
      installs: 15,
      cpi: 13.33,
      mmpInstalls: 12,
      skanInstalls: 3,
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{textAlign: "left"}}>Ad Set Metrics</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ad Set</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Bidding Status</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Boost</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Impressions</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Clicks</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Spend ($)</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Installs</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>CPI ($)</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>MMP Installs</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>SKAN Installs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ textAlign: 'left' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.adSet}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><div style={{borderRadius:"50%", backgroundColor: (row.biddingStatus=="Active"?"green":"red"), width:"20px", height:"20px"}}></div></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.boost}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.impressions}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.clicks}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>${row.spend}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.installs}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>${row.cpi}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.mmpInstalls}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.skanInstalls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleTable;
