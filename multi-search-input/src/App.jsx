import { useEffect, useRef, useState } from 'react'
import './App.css'
import Pill from './components/Pill';
function App() {

  const [searchedUser, setSearchedUser] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersSet, setSelectedUsersSet] = useState(new Set());
  const inputRef = useRef(null);


  useEffect(()=>{

    if(searchedUser.trim()===""){
      setSuggestions([]);
      return;
    }

      const fetchUser = ()=>{
        fetch(`https://dummyjson.com/users/search?q=${searchedUser}`)
      .then(res=>res.json())
      .then(data=>setSuggestions(data.users))
      .catch(err=>console.error(err));
    }

    const timer = setTimeout(()=>{
      fetchUser();
    },500);

    return ()=>clearTimeout(timer);

  },[searchedUser])

  const handleSearch = (e)=>{
    setSearchedUser(e.target.value);

  }
  const handleSelectedUser = (user)=>{
    setSelectedUsers([...selectedUsers,user]);
    setSelectedUsersSet(new Set([...selectedUsersSet,user.email]));
    setSuggestions([]);
    setSearchedUser("");
    inputRef.current.focus();
  }
  const handleRemove = (user)=>{
    const updatedUsers = selectedUsers.filter(u=>u.id !== user.id);
    setSelectedUsers(updatedUsers);

    const updatedEmail = new Set(selectedUsersSet);
    updatedEmail.delete(user.email);
    setSelectedUsersSet(updatedEmail);
  }

  const handleKeyDown = (e)=>{
    if(e.key==="Backspace" && e.target.value==="" && selectedUsers.length>0){
      const lastUser = selectedUsers[selectedUsers.length-1];
      handleRemove(lastUser);
    }
  }
  return (
    <>
    <div className='search-container'>
      <div className='search-input'>
        {/* pill */}
        {selectedUsers?.map((user)=>{
          return <Pill key={user.email} image={user.image} firstName={user.firstName} lastName={user.lastName} remove={()=>handleRemove(user)}/>
        })}

        <input
            ref={inputRef}
            type="text"
            value={searchedUser}
            onChange={handleSearch}
            className='input'
            placeholder='Search User'
            onKeyDown={handleKeyDown}
        />

        {/* suggestions */}
        { suggestions.length>0 &&
          <div className='suggestions'>
            <ul>
              {suggestions?.map((user)=>{
                return !selectedUsersSet.has(user.email)?<li onClick={()=>handleSelectedUser(user)} key={user.email}><img src={user.image} alt={user.firstName}  />{`${user.firstName} ${user.lastName}`}</li>:<></>
              })}
            </ul>
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default App
