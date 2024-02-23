import React, { useState } from 'react';
import '../Styles/Home3.css';

function Home1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // Assuming you have 5 slides

    const handleSlideChange = (direction) => {
        if (direction === 'up' && currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else if (direction === 'down' && currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div className="slider">
            <div className="controls">
                <div className="up" onClick={() => handleSlideChange('up')}>
                    <i className="fa fa-chevron-up"></i>
                </div>
                <div className="down" onClick={() => handleSlideChange('down')}>
                    <i className="fa fa-chevron-down"></i>
                </div>
            </div>

            <div className="wrapper">
                <div className="left" style={{ marginTop: `${currentSlide * -100}vh` }}>
                    <div>
                        <h2>London</h2>
                        <p>
                            London is the capital of the United Kingdom, with a population of
                            just under 9 million. It is among the oldest of the world’s great
                            cities and one of the most cosmopolitan. London is also great for
                            travelers because there is no language barrier so it’s a nice way
                            to ease into visiting a foreign country.
                        </p>
                    </div>
                    <div>
                        <h2>Paris</h2>
                        <p>
                            Paris is the capital of France, with an official estimated
                            population of 2 million residents. It is the most visited city in
                            Europe. Paris has famous sights, museums, nightlife, and culture,
                            and also an excellent Metro system so getting around is quick and
                            easy.
                        </p>
                    </div>
                    <div>
                        <h2>Istanbul</h2>
                        <p>
                            Istanbul is the largest city in Turkey, serving as the country's
                            economic, cultural and historic hub. It has a population of over
                            16 million residents. Istanbul, which spreads across two
                            continents and between two seas, is a city of empires past. The
                            Hagia Sophia, Blue Mosque, Topkapi Palace, and Galata Tower are
                            just some of the many historic structures scattered throughout the
                            city.
                        </p>
                    </div>
                    <div>
                        <h2>Amsterdam</h2>
                        <p>
                            Amsterdam is the capital of the Netherlands, and it has a
                            population of almost 1 million. It is still a major European
                            tourism destination thanks to its beautiful architecture, lovely
                            canals, and liberal social policies. Amsterdam is also
                            consistently ranked one of the best places to live in Europe.
                        </p>
                    </div>
                    <div>
                        <h2>Rome</h2>
                        <p>
                            Rome is the capital city of Italy, with a population of 4 million
                            residents. It has an immensely rich historical heritage and
                            cosmopolitan atmosphere, making it one of Europe's and the world's
                            most visited, famous, influential, and beautiful capitals. Rome
                            also has wonderful palaces, thousand-year-old churches and
                            basilicas, grand romantic ruins, opulent monuments, ornate
                            statues, and graceful fountains.
                        </p>
                    </div>
                </div>

                <div className="right" style={{ marginTop: `${(totalSlides - currentSlide) * -100}vh` }}>
                    <div>
                        <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/a3c768a5-71d4-404c-82d7-6535f59f2098" alt="London" />
                    </div>
                    <div>
                        <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/d0cb0774-5b2a-46d8-9575-8b6dc9f97583" alt="Paris" />
                    </div>
                    <div>
                        <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/f879e848-c8dd-4ebd-876c-c07c8758107c" alt="Istanbul" />
                    </div>
                    <div>
                        <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/c6cee1ff-5c41-447e-be06-06388b87b538" alt="Amsterdam" />
                    </div>
                    <div>
                        <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/f3089615-68aa-48bd-8184-97881b7f8d85" alt="Rome" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home1;
