import React from 'react'
import { Button } from './ui/button'
import { MdOutlinePublish } from 'react-icons/md'

function PublishFormBtn() {
  return (
    <Button variant={'outline'} className='gap-2  bg-gradient-to-r from-gray-400 to-gray-500 text-white dark:text-black dark:hover:text-white'>
        <MdOutlinePublish className='w-4 h-4'/>
        Publish
    </Button>
  )
}

export default PublishFormBtn