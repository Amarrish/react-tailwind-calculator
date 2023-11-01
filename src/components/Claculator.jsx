import React, { useState } from 'react'

const Claculator = () => {

    const handleclear = () =>{
        setValue(value.slice(0, -1))
    }

    const handlesubmit = () =>{
        try{
            if(typeof value ==='string' || typeof value==='number'){
                setValue(eval(value).toString())
            }
            else{
                console.error('invalid', value)
            }
        }
        catch (error){
                console.error('invalid', error)
        }
    }
    const [value,setValue] = useState('')
  return (
    <>
    <div class='border  border-sky-950 flex items-center justify-center w-auto h-screen'>
        <div  class='border p-5 rounded items-center justify-center border-sky-950 '>
        <div>
            <input value={value} class=" w-full outline-none border-none text-right rounded-md p-2.5 text-black bg-sky-300 text-lg" type="text" />
        </div>

        <div>

        <div>
                <input type="button" class="m-2.5 w-12 rounded-md p-2.5 text-white text-lg" />
                <input onClick={handleclear} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='Clr'/>
                <input onClick={e=>setValue('')} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='AC'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value=' /' />
            </div>

            <div>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='7'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='8'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='9' />
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='* ' />
            </div>

            <div>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='4' />
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='5'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='6'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='+ '/>
            </div>

            <div>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='1'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='2'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='3'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='-'/>
            </div>

            <div>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='00'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='0'/>
                <input onClick={e=>setValue(value + e.target.value)} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='.'/>
                <input onClick={handlesubmit} type="button" class="m-2.5 bg-black w-12 rounded-md p-2.5 text-white text-lg" value='='/>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Claculator