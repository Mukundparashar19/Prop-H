import PropTypes from 'prop-types'

function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"  } </p>
        </div>
    )
} 

// this is checking the type of prop 
Student.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}

// this is default when no data is passed as prop 
Student.defaultProps = {
    name:'guest',
    age: 0,
    isStudent: false,

}
export default Student