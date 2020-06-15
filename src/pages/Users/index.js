import React from 'react';
import { UsersList } from './components/UsersList';
import { connect } from 'react-redux';

const UsersInner = () => {
  return (
    <div>
      <UsersList />
    </div>
  )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = () => {

}

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersInner);