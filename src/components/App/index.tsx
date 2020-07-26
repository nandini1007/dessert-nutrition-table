import React from 'react';
import Table from '../Table';
import classList from './classList';
import Button from '../Button';

function App() {
  return (
    <div className={classList.container}>
        <div className={classList.appTitleBar}>
          <div className={classList.appTitle}>Nutrition List</div>
          <Button>Reset</Button>
        </div>
        <div className={classList.featureButtonWrapper}>
          <div>
            Select
            </div>
            <div>
              <Button>Add New</Button>
              <Button className="ml3">Delete</Button>
            </div>
        </div>
        <Table />
    </div>
  );
}

export default App;
