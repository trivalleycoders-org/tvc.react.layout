// Events
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import Event from './Event';
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'
import P from '../../elements/P'
import A from '../../elements/A'

let i = 1;

class Events extends Component {
  componentWillMount() {
    this.props.requestReadEvents();
  }

  render() {

    const { readEventsRequest } = this.props;

    const renderEvents = this.props.events.map((e) => (
        <Event
          key={e.time}
          date={e.time}
          name={e.name}
          locationName={`${e.venue.name}`}
          locationAddress={`${e.venue.address_1}`}
          locationCity={`${e.venue.city}`}
          url={e.event_url}
          index={i++}
        />
      )
    )

    switch (readEventsRequest.status) {
      case 'success':
        return (
          <SectionWrapper id='events'>
            <Section title='Free Events' fontColor='green'>
              {renderEvents}
            </Section>
          </SectionWrapper>
        )

      case 'failure':
        return (
          <SectionWrapper>
            <Section title='Free Events' fontColor='green'>
              <P>Something went wrong. Our events cannot be shown now. Please visit our group on Meetup <A href='https://www.meetup.com/trivalleycoders/'>TriValley Coders on Meetup</A></P>
            </Section>
          </SectionWrapper>
        )
      default:
        return (
          <SectionWrapper>
            <Section title='Free Events' fontColor='green'>
              <h2>Loading data...</h2>
            </Section>
          </SectionWrapper>
        )
    }
  }
}

Events.propTypes = {
  requestReadEvents: PropTypes.func.isRequired,
  readEventsRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    readEventsRequest: selectors.getRequest(state, 'readEvents'),
    events: selectors.getEvents(state),
  }
};

export default connect(mapStateToProps, actionCreators)(Events);
