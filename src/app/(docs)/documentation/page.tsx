import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import DocumentationTabs from '@/components/DocumentationTabs'
import type { Metadata } from 'next'
import APIDropDown from '@/components/APIDropDown'

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & open-source text similarity API',
}

const page: FC = () => {
  useState()
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        
        <Paragraph>api/v1/similarity</Paragraph>

        <APIDropDown currApi ={currApi} setApi = {setApi}/>
        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
