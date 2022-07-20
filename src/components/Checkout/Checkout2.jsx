import './Checkout.css'
import React from 'react';
import Tippy from '@tippy.js/react';
import 'react-tippy/dist/tippy.css'
import { Link } from "react-router-dom";

function Checkout2(){
    return(
        <div className="container" style={{marginLeft:500, marginTop:30}}>
        <div className="row py-2">
          <div className="card" style={{ width:800}}>
              <div className="card-body bg-transparent">
                
                  <div className="title">
                      <h1 style = {{textDecorationLine:'underline'}}>Checkout Information:</h1>
                  </div>

                  <div className="elements-container" >
                        <h2>Please enter your payment information.</h2>
                        <br></br>
                        <div style={{textAlign:"left",fontSize:35, fontWeight:"bold", textDecorationLine:'underline'}}><img className='phoneIcon' style={{height:50}} src={"https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"}/>Payment Info:</div>
                          <div className="firstNameContainer">
                              <label htmlFor="coachpicker" className="form-label" ><img className='phoneIcon' style={{height:40}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8aGhoAAAAUFBQNDQ1lZWU6Ojrc3Nw3Nzc0NDTp6emJiYkYGBgHBwcQEBBYWFivr6/w8PBLS0swMDBTU1O/v7/29vZtbW3R0dHFxcUkJCR3d3fY2NiQkJDn5+egoKCpqamampp2dnZMTEzKyspoaGhCQkKUlJQhISG2trYttGzcAAAEhElEQVR4nO2d63aiMBRGIUHxQqB4oSrW2o51xvd/weGmgAaocAIs/PZPjs1imyuRk2oaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/sP1Y26xf26mNP5reeBgVaer+wgq98uibxcx3Gu9YpgDPHbS5octG1SAmCm40Fe1uBMZw1VPT0fgsGirrXyPCdXUuybKNPpCMfe28iuLkKciacUZ9wxK37sE0DQ8eICxHLbZMvSgnbZTIEGk79QmZJFYoV3Y0RskoU2ax2EW+xId8168yq8HZxQ2VvtYvwRdMS1JLUgPBrl7Cwo1GUESwclOCyaES1F7VLGEetgC8Jb4qWZXyD49oFJIZTwnuiZQrDKmDYOTCsBIadQ2W4NPsK0XwYPDr1leT+Ghv2HRjCsP/AEIb9B4Yw7D8whGH/gSEM+w8MYdh/YPgLQ95XyAzHk34yJjLkk9oFqGaCPe8qYNg5MKwEhp0Dw0pg2DkwrASGnQPDSl7Z0DU3p/0hc2Fmnk5m/beRa6LKcD8fi+hlj93oEl3Y+Mv47Y/l96nB/T6PGsPNijEeZzsYLBRan5m47icINr00vOtnUGLoM/u2A2QF7dRz0gvRRfanvcaqwNCd3JJodCtMOTLFQ+KX0SjF4ynoDV1upCYsaI97WeKXxdrqjfSGu0yDFD/BCGpId1Stpgllv4XcMM3zCqvQ1bSFIRPUdbul7Tlqw1NOcK5pRyb1C6N/aRQqoDZcZAdNdihLTmwpC4XYcJOtMft8S8qRV+InkUQpxIa+uDPI1ekd7STaEBtOs22S7a9ZR0WVmF21atv5A59eSfB4C67LgrSGbrZNWsLNt9pHw2yuvC99hTn5Dr5lwX/JwuhdFtxdOzmtYU6I78q7YWD4lZazlX4yydtclwUv0iAbKTHM3Ul47avccJ6W8y5P6Y/H25F8To0TQ4uCngrDy73h318bOgX3Ga18CsarOLgqCLoqDHNNLRwqP8sNP9JyPqSftFgUnMuDIgr60iDXNRWGZm6k0b2CDnQzPKbluExSiVbSU2dMUk9WMp8e5MFr2bSGnpGdHILJwCw3zD5CmWfJiHgdivbjx5i4BSeSv7ytJojnw1yfCCcDq2Q+tFg+/9ud3eOVBUv/Mo0RG+bW2WH+tLyTxBij8qJpIDbMrWEsO3z8LWmkrTwEUz9b5Ea9sJkWzAJ6vDBvAWpDL1uJ9jgcXot6YktbNeTP+LkpMdymKZoSs5OhSuj3abLLGM69cNUsFWxw2shTKNhNnGfapQiHyx+JYmuCSnaEj5nlSbT0nN/vJ3JW/yCOZ1Gy520u0oVU1N1Oy+zKirN/NIeo/QpFv8xsV8HCybBtWzD2HV64BGsyEVwwggvTVk96UfbrmnuZjxZnx/+8bvwe3vzRObhwPNx/VC34hbQSGHYODCt5GcMBnxM1/LO+hn9e2/DP3Bv+uYnDP/vyBc4vHf4ZtC9wjvDwz4J+gfO8X+BMdm345+qHDP1/IwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAh8R+s8WbNRmDw4QAAAABJRU5ErkJggg=="}></img> Name on Card:</label>
                             
                              <input className="form-control" type="text" placeholder="ex. Meiling Jung" style={{height:45, width:700}}/>
                            
                            </div>
                                
                            <div className="nameContainer">
                                <label htmlFor="coachpicker" className="form-label" ><img className='phoneIcon' style={{height:40}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8aGhoAAAAUFBQNDQ1lZWU6Ojrc3Nw3Nzc0NDTp6emJiYkYGBgHBwcQEBBYWFivr6/w8PBLS0swMDBTU1O/v7/29vZtbW3R0dHFxcUkJCR3d3fY2NiQkJDn5+egoKCpqamampp2dnZMTEzKyspoaGhCQkKUlJQhISG2trYttGzcAAAEhElEQVR4nO2d63aiMBRGIUHxQqB4oSrW2o51xvd/weGmgAaocAIs/PZPjs1imyuRk2oaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/sP1Y26xf26mNP5reeBgVaer+wgq98uibxcx3Gu9YpgDPHbS5octG1SAmCm40Fe1uBMZw1VPT0fgsGirrXyPCdXUuybKNPpCMfe28iuLkKciacUZ9wxK37sE0DQ8eICxHLbZMvSgnbZTIEGk79QmZJFYoV3Y0RskoU2ax2EW+xId8168yq8HZxQ2VvtYvwRdMS1JLUgPBrl7Cwo1GUESwclOCyaES1F7VLGEetgC8Jb4qWZXyD49oFJIZTwnuiZQrDKmDYOTCsBIadQ2W4NPsK0XwYPDr1leT+Ghv2HRjCsP/AEIb9B4Yw7D8whGH/gSEM+w8MYdh/YPgLQ95XyAzHk34yJjLkk9oFqGaCPe8qYNg5MKwEhp0Dw0pg2DkwrASGnQPDSl7Z0DU3p/0hc2Fmnk5m/beRa6LKcD8fi+hlj93oEl3Y+Mv47Y/l96nB/T6PGsPNijEeZzsYLBRan5m47icINr00vOtnUGLoM/u2A2QF7dRz0gvRRfanvcaqwNCd3JJodCtMOTLFQ+KX0SjF4ynoDV1upCYsaI97WeKXxdrqjfSGu0yDFD/BCGpId1Stpgllv4XcMM3zCqvQ1bSFIRPUdbul7Tlqw1NOcK5pRyb1C6N/aRQqoDZcZAdNdihLTmwpC4XYcJOtMft8S8qRV+InkUQpxIa+uDPI1ekd7STaEBtOs22S7a9ZR0WVmF21atv5A59eSfB4C67LgrSGbrZNWsLNt9pHw2yuvC99hTn5Dr5lwX/JwuhdFtxdOzmtYU6I78q7YWD4lZazlX4yydtclwUv0iAbKTHM3Ul47avccJ6W8y5P6Y/H25F8To0TQ4uCngrDy73h318bOgX3Ga18CsarOLgqCLoqDHNNLRwqP8sNP9JyPqSftFgUnMuDIgr60iDXNRWGZm6k0b2CDnQzPKbluExSiVbSU2dMUk9WMp8e5MFr2bSGnpGdHILJwCw3zD5CmWfJiHgdivbjx5i4BSeSv7ytJojnw1yfCCcDq2Q+tFg+/9ud3eOVBUv/Mo0RG+bW2WH+tLyTxBij8qJpIDbMrWEsO3z8LWmkrTwEUz9b5Ea9sJkWzAJ6vDBvAWpDL1uJ9jgcXot6YktbNeTP+LkpMdymKZoSs5OhSuj3abLLGM69cNUsFWxw2shTKNhNnGfapQiHyx+JYmuCSnaEj5nlSbT0nN/vJ3JW/yCOZ1Gy520u0oVU1N1Oy+zKirN/NIeo/QpFv8xsV8HCybBtWzD2HV64BGsyEVwwggvTVk96UfbrmnuZjxZnx/+8bvwe3vzRObhwPNx/VC34hbQSGHYODCt5GcMBnxM1/LO+hn9e2/DP3Bv+uYnDP/vyBc4vHf4ZtC9wjvDwz4J+gfO8X+BMdm345+qHDP1/IwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAh8R+s8WbNRmDw4QAAAABJRU5ErkJggg=="}></img>  Card Number:</label>
                                <Tippy content="Our website is 100% secure. Your card number is safe with us.">
                                <input className="form-control" placeholder="xxxx-xxxx-xxxx" id="date" name="date" type="text" style={{height:45, width:700}}/>
                                </Tippy>
                            </div>

                            <div className="nameContainer">
                                <label htmlFor="coachpicker" className="form-label" > <img className='phoneIcon' style={{height:40}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8aGhoAAAAUFBQNDQ1lZWU6Ojrc3Nw3Nzc0NDTp6emJiYkYGBgHBwcQEBBYWFivr6/w8PBLS0swMDBTU1O/v7/29vZtbW3R0dHFxcUkJCR3d3fY2NiQkJDn5+egoKCpqamampp2dnZMTEzKyspoaGhCQkKUlJQhISG2trYttGzcAAAEhElEQVR4nO2d63aiMBRGIUHxQqB4oSrW2o51xvd/weGmgAaocAIs/PZPjs1imyuRk2oaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/sP1Y26xf26mNP5reeBgVaer+wgq98uibxcx3Gu9YpgDPHbS5octG1SAmCm40Fe1uBMZw1VPT0fgsGirrXyPCdXUuybKNPpCMfe28iuLkKciacUZ9wxK37sE0DQ8eICxHLbZMvSgnbZTIEGk79QmZJFYoV3Y0RskoU2ax2EW+xId8168yq8HZxQ2VvtYvwRdMS1JLUgPBrl7Cwo1GUESwclOCyaES1F7VLGEetgC8Jb4qWZXyD49oFJIZTwnuiZQrDKmDYOTCsBIadQ2W4NPsK0XwYPDr1leT+Ghv2HRjCsP/AEIb9B4Yw7D8whGH/gSEM+w8MYdh/YPgLQ95XyAzHk34yJjLkk9oFqGaCPe8qYNg5MKwEhp0Dw0pg2DkwrASGnQPDSl7Z0DU3p/0hc2Fmnk5m/beRa6LKcD8fi+hlj93oEl3Y+Mv47Y/l96nB/T6PGsPNijEeZzsYLBRan5m47icINr00vOtnUGLoM/u2A2QF7dRz0gvRRfanvcaqwNCd3JJodCtMOTLFQ+KX0SjF4ynoDV1upCYsaI97WeKXxdrqjfSGu0yDFD/BCGpId1Stpgllv4XcMM3zCqvQ1bSFIRPUdbul7Tlqw1NOcK5pRyb1C6N/aRQqoDZcZAdNdihLTmwpC4XYcJOtMft8S8qRV+InkUQpxIa+uDPI1ekd7STaEBtOs22S7a9ZR0WVmF21atv5A59eSfB4C67LgrSGbrZNWsLNt9pHw2yuvC99hTn5Dr5lwX/JwuhdFtxdOzmtYU6I78q7YWD4lZazlX4yydtclwUv0iAbKTHM3Ul47avccJ6W8y5P6Y/H25F8To0TQ4uCngrDy73h318bOgX3Ga18CsarOLgqCLoqDHNNLRwqP8sNP9JyPqSftFgUnMuDIgr60iDXNRWGZm6k0b2CDnQzPKbluExSiVbSU2dMUk9WMp8e5MFr2bSGnpGdHILJwCw3zD5CmWfJiHgdivbjx5i4BSeSv7ytJojnw1yfCCcDq2Q+tFg+/9ud3eOVBUv/Mo0RG+bW2WH+tLyTxBij8qJpIDbMrWEsO3z8LWmkrTwEUz9b5Ea9sJkWzAJ6vDBvAWpDL1uJ9jgcXot6YktbNeTP+LkpMdymKZoSs5OhSuj3abLLGM69cNUsFWxw2shTKNhNnGfapQiHyx+JYmuCSnaEj5nlSbT0nN/vJ3JW/yCOZ1Gy520u0oVU1N1Oy+zKirN/NIeo/QpFv8xsV8HCybBtWzD2HV64BGsyEVwwggvTVk96UfbrmnuZjxZnx/+8bvwe3vzRObhwPNx/VC34hbQSGHYODCt5GcMBnxM1/LO+hn9e2/DP3Bv+uYnDP/vyBc4vHf4ZtC9wjvDwz4J+gfO8X+BMdm345+qHDP1/IwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAh8R+s8WbNRmDw4QAAAABJRU5ErkJggg=="}></img> Expiry Date:</label>
                               
                                <input className="form-control"  placeholder="mm/dd/yy" id="date" name="date" type="text" style={{height:45, width:700}}/>
                              
                            </div>
                            
                            <div className="AddressContainer">
                                <label htmlFor="coachpicker" className="form-label" ><img className='phoneIcon' style={{height:40}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8aGhoAAAAUFBQNDQ1lZWU6Ojrc3Nw3Nzc0NDTp6emJiYkYGBgHBwcQEBBYWFivr6/w8PBLS0swMDBTU1O/v7/29vZtbW3R0dHFxcUkJCR3d3fY2NiQkJDn5+egoKCpqamampp2dnZMTEzKyspoaGhCQkKUlJQhISG2trYttGzcAAAEhElEQVR4nO2d63aiMBRGIUHxQqB4oSrW2o51xvd/weGmgAaocAIs/PZPjs1imyuRk2oaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/sP1Y26xf26mNP5reeBgVaer+wgq98uibxcx3Gu9YpgDPHbS5octG1SAmCm40Fe1uBMZw1VPT0fgsGirrXyPCdXUuybKNPpCMfe28iuLkKciacUZ9wxK37sE0DQ8eICxHLbZMvSgnbZTIEGk79QmZJFYoV3Y0RskoU2ax2EW+xId8168yq8HZxQ2VvtYvwRdMS1JLUgPBrl7Cwo1GUESwclOCyaES1F7VLGEetgC8Jb4qWZXyD49oFJIZTwnuiZQrDKmDYOTCsBIadQ2W4NPsK0XwYPDr1leT+Ghv2HRjCsP/AEIb9B4Yw7D8whGH/gSEM+w8MYdh/YPgLQ95XyAzHk34yJjLkk9oFqGaCPe8qYNg5MKwEhp0Dw0pg2DkwrASGnQPDSl7Z0DU3p/0hc2Fmnk5m/beRa6LKcD8fi+hlj93oEl3Y+Mv47Y/l96nB/T6PGsPNijEeZzsYLBRan5m47icINr00vOtnUGLoM/u2A2QF7dRz0gvRRfanvcaqwNCd3JJodCtMOTLFQ+KX0SjF4ynoDV1upCYsaI97WeKXxdrqjfSGu0yDFD/BCGpId1Stpgllv4XcMM3zCqvQ1bSFIRPUdbul7Tlqw1NOcK5pRyb1C6N/aRQqoDZcZAdNdihLTmwpC4XYcJOtMft8S8qRV+InkUQpxIa+uDPI1ekd7STaEBtOs22S7a9ZR0WVmF21atv5A59eSfB4C67LgrSGbrZNWsLNt9pHw2yuvC99hTn5Dr5lwX/JwuhdFtxdOzmtYU6I78q7YWD4lZazlX4yydtclwUv0iAbKTHM3Ul47avccJ6W8y5P6Y/H25F8To0TQ4uCngrDy73h318bOgX3Ga18CsarOLgqCLoqDHNNLRwqP8sNP9JyPqSftFgUnMuDIgr60iDXNRWGZm6k0b2CDnQzPKbluExSiVbSU2dMUk9WMp8e5MFr2bSGnpGdHILJwCw3zD5CmWfJiHgdivbjx5i4BSeSv7ytJojnw1yfCCcDq2Q+tFg+/9ud3eOVBUv/Mo0RG+bW2WH+tLyTxBij8qJpIDbMrWEsO3z8LWmkrTwEUz9b5Ea9sJkWzAJ6vDBvAWpDL1uJ9jgcXot6YktbNeTP+LkpMdymKZoSs5OhSuj3abLLGM69cNUsFWxw2shTKNhNnGfapQiHyx+JYmuCSnaEj5nlSbT0nN/vJ3JW/yCOZ1Gy520u0oVU1N1Oy+zKirN/NIeo/QpFv8xsV8HCybBtWzD2HV64BGsyEVwwggvTVk96UfbrmnuZjxZnx/+8bvwe3vzRObhwPNx/VC34hbQSGHYODCt5GcMBnxM1/LO+hn9e2/DP3Bv+uYnDP/vyBc4vHf4ZtC9wjvDwz4J+gfO8X+BMdm345+qHDP1/IwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAh8R+s8WbNRmDw4QAAAABJRU5ErkJggg=="}></img> CVV:</label>
                                <Tippy content="Our website is 100% secure. Your CVV information is safe with us.">
                                <input className="form-control" placeholder="xxx" id="date" name="date" type="text" style={{height:45, width:700}}/>
                                </Tippy>
                            </div>

                        

                          

                            <div className="btn">
                            <a className="btn btn-warning"  role="button" style={{width: 300, color:'black'}} ><Link to="/confirmation">Submit Order!</Link></a>
                            </div>
                     
                            
                  </div>

               
                  </div>

              </div>
  
             
              
              
          </div>
      </div>
 
    )
}

export default Checkout2;