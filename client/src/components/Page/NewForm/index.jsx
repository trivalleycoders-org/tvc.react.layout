// NewForm
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormControl, Button } from 'react-bootstrap';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import * as ku from '../../../lib/ke-utils';

const NewForm = ({ updateMember, member, requestCreateMember, requestUpdateMember }) => {
  ku.log('member', member, 'green');
  return (
    <div>
      <Button
        onClick={requestCreateMember}
      >
        New Member
      </Button>
      <Button
        onClick={() => requestUpdateMember('member._id', member)}
      >
        Save
      </Button>

      <h1>New Form</h1>
      <form>
        <FormControl
          key={'firstName'}
          type="text"
          onChange={(event) => updateMember(event.target.value)}
          placeholder='First Name'
          value={member.firstName}
        />
        <FormControl
          key={'lastName'}
          type="text"
          onChange={(event) => updateMember(event.target.value)}
          placeholder='Last Name'
          value={member.lastName}
        />
        <FormControl
          key={'picture'}
          type="text"
          onChange={(event) => updateMember(event.target.value)}
          placeholder='Picture'
          value={member.picture}
        />
        <FormControl
          key={'role'}
          type="text"
          onChange={(event) => updateMember(event.target.value)}
          placeholder='Role'
          value={member.role}
        />
      </form>
    </div>
  )
}

/*NewForm.propTypes = {
  member: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
  }),
};*/

const mapStateToProps = (state) => {
  const newMemberId = selectors.getNewMemberId(state);
  const o = {
    member: selectors.getMember(state, newMemberId),
  }
  ku.log('o', o, 'red');
  return o;
};

export default connect(mapStateToProps, actionCreators)(NewForm);
