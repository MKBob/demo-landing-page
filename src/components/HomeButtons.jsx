import { PlayCircle } from '@phosphor-icons/react'
import Button from './Button'

const HomeButtons = () => (
  <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8'>
    <Button className="rounded-full px-8 py-3 text-base" size="lg">
      Try free trial
    </Button>
    <Button variant='ghost' size='none' className='gap-3 px-0 text-base font-medium'>
      <PlayCircle size={32} weight="light" />
      View Demo
    </Button>
  </div>
)

export default HomeButtons

