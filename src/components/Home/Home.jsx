import './Home.css'

function Home(){
    return(

        <div className="container-fluid1" >


              <img src={"https://static2.jetpens.com/images/a/000/215/215915.jpg?q=90&s=73485a19acfda15211f1a8c869bf64d9"} className="d-block w-100" alt="..."></img>
            
                

        <div className="container-fluid2" >
            <div className ="text">
                <h1>Not sure where to start? These blogs can help!</h1>
            </div>
            
            <div className = "blog-options">
                <div className="row">
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card">
                            <img src={"https://static2.jetpens.com/images/a/000/214/214785.jpg?s=e67b47e072bea93b48fa90e321839428"} alt="girls volleyball" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">The Best Japanese Gel Pens</h5>
                                <p className="card-text">It's easy to get lost when trying to find the perfect Japanese pen. From old-school fountain pens to buttery smooth gel pens, the choices are endless. At 一心勉強, we can help you find your new best (writing) friend. </p>
                                <a className="btn btn-outline-warning" href="https://www.jetpens.com/blog/The-Best-Japanese-Gel-Pens/pt/1000" role="button">Read</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card">
                            <img src={"https://static2.jetpens.com/images/a/000/215/215136.jpg?s=678f245106e210793e95c40acc5722c8"} alt="defense" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">A Guide to the Pentel Energel Pen</h5>
                                <p className="card-text">The Pentel Energel pen is a forever favourite at 一心勉強. This pen line never fails to provide a smooth writing experience with no smudging. The Pentel Energel family is huge, read on to explore which pen is right for you.</p>
                                <a className="btn btn-outline-warning" href="https://www.jetpens.com/blog/Pentel-EnerGel-A-Comprehensive-Guide/pt/678" role="button">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card">
                            <img src={"https://static2.jetpens.com/images/a/000/191/191309.jpg?s=0c039311b1803d2f7c9a4fb7812d9023"} alt="position" className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Midori MD Notebooks: Your New Assistant</h5>
                                <p className="card-text">You can never go wrong with a Midori MD notebook. This notebook line comes in a plethora of sizes that suit different professions and usages. Read on to find out which notebook could be your new favourite assistant.</p>
                                <a className="btn btn-outline-warning" href="https://www.jetpens.com/blog/Guide-to-the-Hobonichi-Techo-Planner/pt/900" role="button">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


        
    )
}

export default Home