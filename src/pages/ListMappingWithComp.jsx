import React from 'react'
import ListRenderCustomComp from '../components/ListRenderCustomComp'
import { CustomListData } from '../data'

export default function ListMappingWithComp() {
  return (
    <ListRenderCustomComp data={CustomListData}/>
  )
}
