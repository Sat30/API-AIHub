"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/DropdownMenu'
import { FC } from 'react'
import { Button } from './ui/Button'

interface APIDropDownProps {
  
}

const APIDropDown: FC<APIDropDownProps> = ({}) => {
  return <>
    <DropdownMenu max-w-2xl w-full>
        <DropdownMenuTrigger asChild>
           <Button variant={'outline'} >
              Select-API
           </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() =>"e" }>
          <span>API-1</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => "e"}>
          <span>API-2</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => "e"}>
          <span>API-3</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
}

export default APIDropDown