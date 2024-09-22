import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {           // tour mai jo data hai un sabhi data ke card display kr diya.
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>  //pure toure object ka copy pass kr diya
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;