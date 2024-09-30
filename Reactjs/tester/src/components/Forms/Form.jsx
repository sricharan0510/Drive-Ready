import React, { useEffect, useState } from 'react'

export function Form() {
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Password: "",
        Gender: "",
        College: "",
        // FavHero: []
    });

    const [gen, setGen] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGen(e.target.value)
        setUserData(prev => ({ ...prev, [name]: value }))
    }

    const submitForm = (e) => {
        e.preventDefault();
        var pre = JSON.parse(localStorage.getItem("userdata"));
        if (!Array.isArray(pre)) {
            pre = [];
        }
        pre.push(userData);
        localStorage.setItem("userdata", JSON.stringify(pre));
        console.log(localStorage.getItem('userdata'));
    }

    // const [checkValue, setCheckValue] = useState(false)
    // const checkedValue = (e) => {
    //     setCheckValue(!checkValue);
    // }

    return (
        <form>
            <div style={{ textAlign: 'center', border: 'solid black' }}>
                <h1>Form</h1>
                <input type='text' placeholder='Enter Name' onChange={(e) => handleChange(e)} name='Name' /> <br></br> <br></br>

                <input type='text' placeholder='Enter Email' onChange={(e) => handleChange(e)} name='Email' /> <br></br> <br></br>

                <input type='password' placeholder='Enter Password' onChange={(e) => handleChange(e)} name='Password' /> <br></br> <br></br>

                <label>Gender: </label>
                <label><input type='radio' checked={gen === 'Male'} value={'Male'} onChange={(e) => handleChange(e)} name='Gender' />Male</label>
                <label><input type='radio' checked={gen === 'Female'} value={'Female'} onChange={(e) => handleChange(e)} name='Gender' />Female</label><br></br> <br></br>

                <label>College: </label>
                <select name={'College'} onChange={(e) => { handleChange(e) }}>
                    <option value=' '>Select</option>
                    <option value='AEC'>AEC</option>
                    <option value='ACET'>ACET</option>
                    <option value='ACOE'>ACOE</option>
                </select>

                {/* <br></br><br></br>

                <label>Favourite Heros: </label>
                <label><input type='checkbox' onChange={(e) => { checkedValue(e) }} /> Prabhas</label>
                <label><input type='checkbox' onChange={(e) => { checkedValue(e) }} /> Pawan Kalyan</label>
                <label><input type='checkbox' onChange={(e) => { checkedValue(e) }} /> Jr Ntr</label>
                <label><input type='checkbox' onChange={(e) => { checkedValue(e) }} /> Nani</label> */}

                <br></br><br></br>

                <button onClick={submitForm}>Submit</button>

            </div>
        </form>
    )
}


