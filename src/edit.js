import { useState, useEffect } from "react";
import { useHistory, useParams} from 'react-router-dom';
import useFetch from "./useFetch";

const Edit = () => {
    const { id } = useParams();
    const { data: blog, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
        }
    }, [blog]);

    const handleEdit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="edit">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleEdit}>
                <label>Blog title:</label>
                <textarea 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                <label>Blog author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                {isPending && <button style={{ backgroundColor: 'green', color: 'white' }}>Loading...</button>}
                {!isPending && <button>Save</button>}
            </form>
            
        </div>
     );
}
 
export default Edit;