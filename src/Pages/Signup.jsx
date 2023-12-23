import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-xl text-center font-semibold my-7">Sign Up</h1>
      <form className=" flex flex-col gap-4">
        <input type="text"  placeholder="Username" className="border p-3 rounded-lg" id="username"/>
        <input type="text"  placeholder="Email" className="border p-3 rounded-lg" id="email"/>
        <input type="password"  placeholder="Password" className="border p-3 rounded-lg" id="password"/>
        <button className="bg-slate-800 text-slate-100 p-3 rounded-full hover:opacity-80">Sign Up</button>
        <button className="bg-red-800 text-slate-100 p-3 rounded-full hover:opacity-80">Continue with google</button>
      </form>
      <div className='mt-3'>
        Have an account?
        <Link to={"/sign-in"}>
          <span className='text-blue-600 mx-2'>
            Sign-in
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Signup