

const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <h2>Total : {bookmarks.length}</h2>
            {
                bookmarks.map( (item, idx) => <p key={idx}>{item.name}</p>)
            }
        </div>
    );
};

export default Bookmarks;