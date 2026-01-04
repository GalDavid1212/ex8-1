import { useState } from "react";

function Foo() {
  const [bar, setBar] = useState(3);
  const [raz, setRaz] = useState(10000000);
    
  console.log(bar);

  return (
    <div onClick={() => setBar(bar + 1)}>
        {bar}
        {raz}
     </div>
   
  );
}

export default Foo;
