const RestaurantCard = (props) => {

    console.log(props);
    const {name, image, rating, time} = props;

    const {restData} = props;


    const restDateFetch = restData;

    //prevent runtime errors using optional chaining


    return (
        <div className="rest-card">
            <div className="card-image">
                <img className="restaurant-image" src= {restDateFetch?.image}
                />   
            </div>
            <h3>{restDateFetch?.name}</h3>
            <p>{restDateFetch?.rating}</p>
            <p>{restDateFetch?.time}</p>
        </div>
    )
}
export default RestaurantCard;