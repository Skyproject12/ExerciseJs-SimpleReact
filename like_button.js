

const e = React.createElement;

function LikeButton() {
    // Display a "Like" <button>
    return e( 
        // membuat button like 
        'button',
        { onClick: () => alert('button work') },
        'Like'
    );
}



// memberi initial id 
const domContainer = document.querySelector('#like_button_container');
// melakukan render react 
ReactDOM.render(e(LikeButton), domContainer);