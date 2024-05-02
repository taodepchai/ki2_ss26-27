
let ColorBox = ({ color }: { color: string }) => {
  let boxStyle = {
    color: 'white',
    width: '200px',
    height: '200px',
  };

  return (
    <div style={{ ...boxStyle, backgroundColor: color }}>{color}</div>
  );
};

let Bt5 = () => {
    let contentStyle = {
        display:'flex',
        gap:'10px'
    };
  return (
   
    <div style={contentStyle}> 
    <h1>bt5</h1>
      <ColorBox color="red" />
      <ColorBox color="green" />
      <ColorBox color="blue" />
    </div>
  );
};

export default Bt5;

