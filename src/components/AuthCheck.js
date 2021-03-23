import Auth from '../pages/Auth';

// This component functions as a login checker to see what it should render inside it
// That's why we use props.children
export default function(props) {

    let output;

    if (props.isLoggedIn) {
        output = props.children;
    } else {
        output = <Auth setIsLoggedIn = {props.setIsLoggedIn} />
    }

    return output;
}