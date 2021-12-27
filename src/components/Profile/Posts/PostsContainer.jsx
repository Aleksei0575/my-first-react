import {addPostActionCreator, updateNewPostTextActionCreater} from "../../../redax/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        textDefault: state.profilePage.newPostText,
        title: "My posts",
        textButton: "Send"
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextActionCreater(newText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
