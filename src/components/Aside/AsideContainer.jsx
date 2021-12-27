import {addFriendActionCreator} from "../../redax/aside-reducer";
import Aside from "./Aside";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        navItems: state.aside.navItems,
        friends: state.aside.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFriendActionCreator: () => {
            dispatch(addFriendActionCreator());
        }
    }
}

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside);

export default AsideContainer;
