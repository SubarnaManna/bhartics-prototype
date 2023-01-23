import carData from '../Database/cardata.json';
import './Static/NewCarTemplate.css';

let carSet = [];

for (const Data of carData.CarList) {
    // if (Object.hasOwnProperty.call(object, Data)) {  
        carSet.push(
    <div className="ModelShell">
    <div className="model">
        <img src={Data.CarImage} alt=""/>
        <div className="off_discount">₹ {Data.Discount} off</div>
    </div>
    <div className="ModelDetails">
        <div className="ModelHeadingLine">
            <div className="ModelName">{Data.CarName}</div>
            <div className="ModelColorBox">
                <span className="modelColor"></span>
                <span className="ColorName"> {Data.AvailableColors[0]} </span>
            </div>
            </div>
        <div className="ModelFuel">{Data.FuelType} &nbsp;&nbsp;.&nbsp;&nbsp; {Data['Driving Mode']}</div>
        <div className="keypoints">
            <div className="features">{Data.Features[0]}</div>
            <div className="features">{Data.Features[1]}</div>
            <div className="features">{Data.Features[2]}</div>
        </div>
        <div className="Modelprice">
            <div className="currentPrice"><span className="Ruppee" >₹ </span><span className="Amount">{Data.CurrentPrice}</span></div>
            <div className="oldPrice"><strike> ₹ <span className="Amount">{Data.Discount}</span></strike></div>
        </div>
        <div className="ModelEmi">EMI starts at &nbsp;&nbsp;&nbsp; <span className="Ruppee" >₹ </span><span className="Amount">{Data.EMIAmount}</span></div>
        <div className="ModelAction">
            <button className="BuyBtn">Buy</button>
            <a className="LearnMore" to="">Learn More {`>`} </a>
        </div>
    </div>
    </div>
    
    )
    
    // }
}


function App(Data) {
  return (
    <div className="car_Container">
        <div className="NewCarHeading">New Cars</div>
        <div className="Carshell">
            {carSet}
        </div>
    </div>
  );
}

export default App;
