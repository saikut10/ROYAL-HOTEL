import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>

            <div className='home__section'>
            <Card
                src="https://seapearlcoxsbazar.com/images/rt001.jpg"
                title="Tulip Hotel in Cox's Bazar"
                description="Enjoy the amazing rooms and get world class facilities in cox bazar"
                price="TK 3000/night"
            /> 
            <Card
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/64/1e/94/best-western-plus-heritage.jpg?w=900&h=-1&s=1"
                title="Best western heritage in cox's bazar "
                description="Superhost with a stunning views of the cox's bazar"
                price="TK 2500/night"
            /> 
            <Card
                src="https://www.coxsbazarcity.com/wp-content/uploads/2019/09/hotel-the-cox-today-feature.png"
                title="Hotel The Cox Today"
                description="Enjoy the amazing rooms and stunning summing pools in cox's bazar"
                price="TK 2000/night"
            /> 
            </div>

            <div className='home__section'>
            <Card
                src="https://tse3.mm.bing.net/th?id=OIP.sXsAaW-BryiCMZJ8CzuQCgHaC9&pid=Api&P=0&w=436&h=175"
                title="Le Meridien Hotel in Dhaka"
                description="Enjoy the amazing rooms and get world class facilities in Dhaka"
                price="TK 4000/night"
            /> 
            <Card
                src="https://digital.ihg.com/is/image/ihg/intercontinental-dhaka-5919572575-2x1?wid=1440&fit=fit,1"
                title="InterContinental Hotel in Dhaka "
                description="Superhost with a stunning views of the Dhaka City"
                price="TK 3500/night"
            /> 
            <Card
                src="https://images.trvl-media.com/hotels/9000000/8720000/8711200/8711174/ea40c161_z.jpg"
                title="Sheraton Hotel in Dhaka"
                description="Enjoy the amazing rooms and stunning summing pools in Dhaka"
                price="TK 5000/night"
            /> 
            </div>

            <div className='home__section'>
            <Card
                src="https://www.flightexpert.com/blog/wp-content/uploads/2017/11/Chittagong-hotels.jpg"
                title="Best western heritage in Chittagong"
                description="Enjoy the amazing rooms and get world class facilities in Chittagong"
                price="TK 3500/night"
            /> 
            <Card
                src="https://t-ec.bstatic.com/images/hotel/max1024x768/925/92583733.jpg"
                title="Sonargaon Hotel in Chittagong"
                description="Superhost with a stunning views of the chittagong City"
                price="TK 2000/night"
            /> 
            <Card
                src="http://www.trip2bangladesh.com/wp-content/uploads/2012/06/Rad.jpg"
                title="Radisson Hotel in Chittagong"
                description="Enjoy the amazing rooms and stunning summing pools in Chittagong"
                price="TK 5000/night"
            /> 
            </div>

            <div className='home__section'>
            <Card
                src="https://www.grandsultanresort.com/images/home/facilities/home-swimming-pool.jpg"
                title="Best western heritage in Sylhet"
                description="Enjoy the amazing rooms and get world class facilities in Sylhet"
                price="TK 3500/night"
            /> 
            <Card
                src="http://www.grandsultanresort.com/images/home-slides/home-banner1.jpg"
                title="Grand Sultan Hotel in Sylhet"
                description="Superhost with a stunning views of the sylhet City"
                price="TK 2000/night"
            /> 
            <Card
                src="https://1.bp.blogspot.com/-l_Fju3F5d6o/WAsRYiJDy2I/AAAAAAAAN44/xp9bX_lZT00G00jlmttzMB93WEM3zM2qgCLcB/s1600/2.jpg"
                title="The Palace Hotel in Sylhet"
                description="Enjoy the amazing rooms and stunning summing pools in Sylhet"
                price="TK 5000/night"
            /> 
            </div>

            <div className='home__section'>
            <Card
                src="https://thumbnails.trvl-media.com/E6F9_ogBgx9DIXy8w6xnA4eGbHo=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/22000000/21130000/21127400/21127385/0003b3bf_z.jpg"
                title="Hotel Grand Park in Barisal"
                description="Enjoy the amazing rooms and get world class facilities in Barisal"
                price="TK 3500/night"
            /> 
            <Card
                src="https://tse4.mm.bing.net/th?id=OIP.dzx_0W1wGR1gpLLH4hpDTAHaEK&pid=Api&P=0&w=317&h=179"
                title="Best western heritage in Barisal"
                description="Superhost with a stunning views of the Barisal City"
                price="TK 2000/night"
            /> 
            <Card
                src="https://tse4.mm.bing.net/th?id=OIP.4GainXSoBe85hs3v4-mN2gHaHz&pid=Api&P=0&w=300&h=300"
                title="kuakata Grand Hotel in Barisal"
                description="Enjoy the amazing rooms and stunning summing pools in Barisal"
                price="TK 5000/night"
            /> 
            </div>

            <div className='home__section'>
            <Card
                src="https://thumbnails.trvl-media.com/MeJY1mU46obPIeHrJj2YBMq_KM8=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/22000000/21350000/21340900/21340831/221abe68_z.jpg"
                title="Book Tiger Garden Int Hotel in khulna"
                description="Enjoy the amazing rooms and get world class facilities in Khulna"
                price="TK 3500/night"
            /> 
            <Card
                src="https://static-cityguides.s3.amazonaws.com/articles/hilton-8-1610982516NCAZu.jpg"
                title="Hilton Hotel in Khulna"
                description="Superhost with a stunning views of the Khulna City"
                price="TK 2000/night"
            /> 
            <Card
                src="https://static-cityguides.s3.amazonaws.com/articles/hotels-27-1608131970dCJF8.jpg"
                title="The Grand Hotel in Khulna"
                description="Enjoy the amazing rooms and stunning summing pools in Khulna"
                price="TK 5000/night"
            /> 
            </div>

            

            
        </div>
    )
}

export default Home
