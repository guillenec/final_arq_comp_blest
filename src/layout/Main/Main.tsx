import Header from '../Header/Header'
import Footer from '../Footer/Footer'

type Props = {
  children: React.ReactNode
}

const Main = ({children}: Props) => {
  return (
    <main className='w-screen h-screen min-h-[500px] bg-red-200 flex flex-col items-center justify-between gap-4'>
      <Header />
      {/* Main content goes here */}
      <div className='w-full h-full flex items-center justify-center'>
      {children}
      </div>
      {/* Footer goes here */}
      <Footer />
    </main>
  )
}

export default Main