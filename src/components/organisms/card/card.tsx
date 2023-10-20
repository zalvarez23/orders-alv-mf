import React from 'react'
import Typography from '../../atoms/typography/typography'
import ItemButton from '../../molecules/item-button'
import Avatar from '../../atoms/avatar/avatar'

type CardProps = {
  title: string,
  body: string,
  footer: string
}

const Card: React.FC<CardProps> = ({title, body, footer}) =>{
  return <div className='w-60 shadow-lg rounded-xl p-4'>
    
    <header>
      <Typography label={title} variant='body' family='bold' color='text-dark'  />
      <div className='flex gap-8 relative'>
        <Typography label='190 g' variant='small' family='medium' color='text-gray-300' />

        <Typography label='120 kal' variant='small' family='medium' color='text-gray-300' />

        <div className='absolute right-[-40px] top-[-40px]'>
          <Avatar size='small' />
        </div>
      </div>
    </header>
    
    <main>
      <Typography label={body} variant='small' family='medium' color='text-gray-300 mt-20'/>

    </main>

    <footer className='mt-8'>
      <ItemButton buttonLabel='Add' textLabel={footer}/>
    </footer>

   </div>
}

export default Card
