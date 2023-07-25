
export default function Followlist() {
    const data = [ 
        "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg","https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg","https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg","https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg","https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
    ]
  return (
    
    <>
        <div className='main max-w-screen border min-h-screen bg-black text-white'>
        <div className='profile w-full bg-white flex text-black py-6'>
            <div className='grid justify-center w-[50%]'>
            <div className=''> 
                <div className='h-40 w-40 rounded-full  bg-cover bg-center border' style={{backgroundImage:"url(https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg)"}}>
                </div>
                </div>
            </div>
            <div className='w-[50%]'>
                
                <p className='text-xl mx-3'>User Name</p> 
                <div className='flex justify-between m-3'>
                <div className='text-center'>
                        <p className='text-sm ' >1</p>
                    <p>posts</p>
                </div>
                <div className='text-center'>
                <p className='text-sm'>1</p>

                    <p>Following</p>
                </div>
                <div className='text-center'>
                <p className='text-sm'>1</p>

                    <p className=''>Followers</p>
                </div>
                </div>
                <div className='w-full flex justify-center py-3'>
                    <p className='w-[90%]'>Bio :Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus inventore reiciendis, saepe nostrum quis?</p>
                </div>
                <div className='flex w-full justify-center '>

                <button className=''> Edit Profile</button>
                </div>
            </div>
        </div>
        <div className="grid grid-col-1  md:grid-cols-3 md:gap-3 max-w-[90%] m-auto mt-3">
        {
            data.map((item)=>(
                <>
                <div className='border rounded-md'>
                <img src={item} alt="s"/> 
                </div>
                </>
            ))
        }
        </div>
        </div>
    </>
  )
}
