import classes from './Button.module.css'; 

const Button = (props) => {
    return <button className={classes.btn}
    style={{backgroundColor: props.bgColor, color: props.color}}>{props.text}</button>
}

export default Button; 