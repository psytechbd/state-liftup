

const Blog = ({ blog, addBookmarkbtn }) => {
    const {name} = blog
    return (
        <div className="flex justify-between my-4">
            <h2>{name}</h2>
            <button onClick={ () => addBookmarkbtn(blog)} className="rounded-full bg-teal-400 p-2 text-white text-sm">Add to Bookmark</button>
            
        </div>
    );
};

export default Blog;


