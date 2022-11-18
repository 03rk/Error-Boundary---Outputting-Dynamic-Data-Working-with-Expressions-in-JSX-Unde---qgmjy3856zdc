import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);

    props.change(setError);

  return (
    <>
    {    
        error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
