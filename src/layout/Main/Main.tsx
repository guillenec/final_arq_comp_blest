import Header from '../Header/Header'
import Footer from '../Footer/Footer'

type Props = {
  children: React.ReactNode
}

const Main = ({children}: Props) => {
  return (
    <main className='w-full min-h-[700px] h-full bg-[#f3f0e3] flex flex-col items-center justify-between gap-4'>
      <Header />
      {/* Main content goes here */}
      {children}
      {/* Footer goes here */}
      <Footer />
    </main>
  )
}

export default Main