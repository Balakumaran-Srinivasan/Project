 import {useState} from 'react'
 import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {enqueueSnackbar}from 'notistack'
export default function CreateBooks() {
    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("");
    const[publishYear,setPublishYear]=useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate("");

    const handleSaveBook=()=>{
          const data={
            title,
            author,
            publishYear,
          };
          setLoading(true);
          axios.post("https://bookstoreapp-1-k338.onrender.com/books/",data)
          .then(()=>{
                setLoading(false);
                enqueueSnackbar('Book Created Sucessfully',{variant:"success"})
                navigate('/');
          })
          .catch((error)=>{
            setLoading(false);
            // alert("An error happend.please check the console");
            enqueueSnackbar('Error',{variant:"error"})
            console.log(error);
          })
    }

  return (
    <div className='p-4'>
       <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>

        {
          loading?(
            <Spinner/>
          ):(
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w:{600px} p-4 mx-auto'>
              <div className='my-4'>
                  <label className='text-xl mr-4 text-gray-500'>Title</label>
                  <input
                  type='text'
                  value={title}
                  onChange={(e)=>{
                    setTitle(e.target.value);
                  }
                }
                className='border-2 border-gray-500 px-4 w-full'
                  />
              </div>
              <div className='my-4'>
                  <label className='text-xl mr-4 text-gray-500'>Author</label>
                  <input
                  type='text'
                  value={author}
                  onChange={(e)=>{
                    setAuthor(e.target.value);
                  }
                }
                className='border-2 border-gray-500 px-4 w-full'
                  />
              </div>
              <div className='my-4'>
                  <label className='text-xl mr-4 text-gray-500'>PublishYear</label>
                  <input
                  type='text'
                  value={publishYear}
                  onChange={(e)=>{
                    setPublishYear(e.target.value);
                  }
                }
                className='border-2 border-gray-500 px-4 w-full'
                  />
              </div>
              <button className='p-2 bg-sky-500 m-8' 
              onClick={handleSaveBook} >
                    Save
              </button>
            </div>
          )
        }
      </div>
  )
}
