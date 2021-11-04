import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Person from './Person';
import { fetchError, getPeople } from './../actions';

const People = ({ people, isFetching, error, dispatch }) => {

  useEffect(()=> {
    dispatch(getPeople());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching people for ya!</h2>;
  }


  const handleClick = () => {
    dispatch(getPeople());
    // dispatch(fetchError("this causes an eror now"));

    //0. connect our actions to this component
    //1. make a api call to https://randomuser.me/api/
    //2. if call is successful: dispatch fetchSuccess passing in our people
    //3. if call is not successful: dispatch fetchError passing in error message
  }
    return(  
    <>    
        <div>
            {people.map(person => {
                return(<Person firstName={person.name.first} lastName={person.name.last} pic={person.picture.large}/>)
            })}
        </div>
        <button onClick={handleClick}>Get new people</button>
        
    </>
    );
}
const mapStateToProps = state => {
    return {
      people: state.people,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  export default connect(mapStateToProps)(People);