const user = {
    register: (cb) =>{
        fetch('/user/register', {method: 'POST'})
            .then(data => data.json())
            .then(res => cb(res))
            .catch(err => console.log(err))
    }
}

export default user;