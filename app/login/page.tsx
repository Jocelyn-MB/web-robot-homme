export const metadata = {
    title: 'Sign In - Simple',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function SignIn() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">¡Bienvenido de nuevo!</h1>
            </div>
  
            {/* Form */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                    </div>
                    <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-600 ml-2">Keep me signed in</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                  </div>
                </div>
              </form>
              <div className="text-gray-600 text-center mt-6">Do not you have an account? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  