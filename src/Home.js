import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;

//Bài 6/////////////////////////////////////////////////////////////////////////////////
// const Home = () => {

//   const handleClick = (e) => {
//     console.log('hello ninjas', e); // e để đưa thêm thông tin
//   }

//   const handleClickAgain = (name, e) => {
//     console.log('hello ' + name, e.target); //e.target để đưa thêm thông tin 
//   }

//   //Không ghi handleClick() vì khi có dấu ngoặc hàm sẽ tự động được gọi khi load trang
//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> 
//     </div>
//   );
// }
 
// export default Home;

//[USE STATE]//////////////////////////////////////////////////////////
// import {useState} from "react";

// const Home = () => {
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('Gia Bảo');
//         setAge(20);
//     }



//     //Không ghi handleClick() vì khi có dấu ngoặc hàm sẽ tự động được gọi khi load trang
//     return (
//         <div className="home">
//         <h2>Homepage</h2>
//         <p>{name} is {age} years old!</p>
//         <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }
 
// export default Home;


//[map] //////////////////////////////////////////////////////////////////////////////
// import {useState} from "react";

// const Home = () => {


//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ])


//     //Không ghi handleClick() vì khi có dấu ngoặc hàm sẽ tự động được gọi khi load trang
//     return (
//         <div className="home">
//             {blogs.map(blog => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by {blog.author}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
 
// export default Home;

//[LỌC]////////////////////////////////////////////////////////////
//<BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" />