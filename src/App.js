import React from "react"
  
function App() {
  
  // Declared an array of items
  const planet = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'
  ];

  // Some styling for the items
  const styles = {
  
    padding:'15px',
    margin: 'auto',
    width:'250px',
    border: '0.2px solid Lightgray'
    
  };
  
  return <>
    {
     
      planet.map(order => <div key={order} 
            style={styles}>{order}</div>)
    }
  </>;
}
  
export default App;
