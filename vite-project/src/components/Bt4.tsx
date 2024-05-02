
let ColorBox = ({ color }: { color: string }) => {
  let boxStyle = {
    color: 'white',
    width: '200px',
    height: '200px',
    backgroundColor: color,
  };

  return (
    <div style={boxStyle}>{color}</div>
  );
};

let Bt4 = () => {
    let contentStyle = {
        display:'flex',
        gap:'10px'
    };
  return (
    <div style={contentStyle}>
     <h1>bt4
      
     </h1>
      <ColorBox color="red" />
      <ColorBox color="green" />
      <ColorBox color="blue" />
    </div>
  );
};

export default Bt4;

