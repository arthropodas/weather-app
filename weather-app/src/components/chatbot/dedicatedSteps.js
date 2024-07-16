import React from 'react';
import Home from "../../Pages/Home/Home";

const steps = [
  {
    id: 'React',
    component: (
      <Home
        performAction={async () => {
          const response = await current(); // Make API call
          return response.data; // Return data to chatbot flow
        }}
      />
    ),
    waitAction: true,
    trigger: 'showResponse',
  },
  {
    id: 'showResponse',
    message: ({ previousValue }) => `API Response: ${previousValue}`,
    end: true,
  },
];

export default steps;