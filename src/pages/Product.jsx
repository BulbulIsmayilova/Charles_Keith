import React, { useState } from 'react'
import ShoesFirstsection from '../components/shoes/ShoesFirstsection'
import ShoesCategories from '../components/shoes/ShoesCategories'
import ShoesContainer from '../components/shoes/ShoesContainer'
import SidebarShoes from '../components/shoes/SidebarShoes'
import { useParams } from 'react-router-dom'
import { useGetCategoryByIdQuery } from '../store/api'

function Product() {
  const { id } = useParams()

  const {data, isLoading }  = useGetCategoryByIdQuery(id)

  const [flag, setFlag] = useState(false)

  const flagScheme = {flag, setFlag}

  return (
    <main id='product-main' className='py-5'>
        {flag && <SidebarShoes flagScheme={flagScheme} />}
        <ShoesFirstsection data={isLoading ? undefined : data} />
        <ShoesCategories data={isLoading ? undefined : data} />
        <ShoesContainer id={id} flagScheme={flagScheme}/>
    </main>
  )
}

export default Product