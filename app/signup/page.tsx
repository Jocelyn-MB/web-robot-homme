export const metadata = {
    title: 'Sign Up - Simple',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function SignUp() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Welcome. We exist to make entrepreneurism easier.</h1>
            </div>
  
            {/* Form */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                    <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                    <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                  </div>
                </div>
        
              </form>
              <div className="flex items-center my-6">
                <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
                <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
              </div>
              
              <div className="text-gray-600 text-center mt-6">
                Already using Simple? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }