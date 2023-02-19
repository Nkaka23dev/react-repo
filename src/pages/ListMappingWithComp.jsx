import React from 'react'
import ListRenderCustomComp from '../components/ListRenderCustomComp'
import { CustomListData } from '../data'

CustomListData
export default function ListMappingWithComp() {
  return (
    <ListRenderCustomComp data={CustomListData}/>
  )
}
