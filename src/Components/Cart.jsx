import React from 'react';
import Card from './Card';


const Cart = () => {
    return (
        <div>
            <div>
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/HFS_June_DesktopHero_3000x1200._CB602502758_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/June/28th/3_3000._CB602465796_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2023/SS/samsung_crystal_3000x1200._CB602489187_.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
          <div>
            <Card/>
        </div>  
        </div>
    );
};

export default Cart;