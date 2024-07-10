import { useState } from 'react'



function App() {

  const [menu, setMenu] = useState(false);

  const handelbtn = () => {
    setMenu(!menu)

  }

  return (
    <>
      <div>
        <div>
          <button onClick={handelbtn} className='border cursor-pointer'>Btn</button>
          {
            menu &&

            <div className='bg-red-500 w-[200px] '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero, voluptatibus quis explicabo praesentium aperiam labore. Officia quas molestiae enim? Neque nesciunt odit voluptatibus sint delectus vitae asperiores quod. Doloremque.
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default App
