import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default () => (
  <Carousel autoPlay={true} width={"75%"}
  showThumbs={false} useKeyboardArrows={true} infiniteLoop={true}>
    
      <div>
        <img src='https://i.imgur.com/nHCTdCk.jpg' />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <img src='https://i.imgur.com/1QaCXCz.jpg' />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src='https://i.imgur.com/EqgIxXu.jpg' />
        <p className='legend'>Legend 3</p>
      </div>
      <div>
        <img src='https://i.imgur.com/WVil30p.jpg' />
        <p className='legend'>Legend 4</p>
      </div>
    
  </Carousel>
)
