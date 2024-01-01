import logo from './assets/logo/logo.png'

export default function Header() {
  return (
    <nav className='navbar mb-2 p-2 bg-light'>
        <div className="container">
            <a href="" className='navbar-brand'>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="" className='w-25' />
                    <div>GraphQL</div>
                </div>
            </a>
        </div>
    </nav>
  )
}
