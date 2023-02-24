import React from 'react'

const AllProducts = () => {
  return (
    <div>
    <Container>
        <Wrapper>
            <h1>New Arrivals. <span>REY backpacks & bags</span></h1>
            <Products>
                <Display to="/productdetails">
                    <First>
                        <Wishlist>
                            <Heart>
                                <span><AiOutlineHeart/></span>
                            </Heart>
                           
                        </Wishlist>
                        <ProductImg>
                            <img src={shirt} alt="" />
                        </ProductImg>
                    </First>
                    <Second>
                        <One>
                            <h2>Leather Gloves</h2>
                        </One>
                        <Two>
                            <h3>perfect mint green</h3>
                        </Two>
                        <Three>
                            <Four>
                                $42.00
                            </Four>
                            <Five>
                                <span><BsFillStarFill style={{color : "#FBBF24"}}/></span>
                                <p>4.6 (41 reviews)</p>
                            </Five>
                        </Three>
                    </Second>
                </Display>
            </Products>
        
            <hr />
        </Wrapper>
    </Container>
</div>
  )
}

export default AllProducts