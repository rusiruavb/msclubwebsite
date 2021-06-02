import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';
import Footer from '../../component/common/footer/Footer';

const Events = () => (
  <div>
    <UpcomingEventComponent />
    <PastEvents />
    <Footer />
  </div>
);

export default Events;
