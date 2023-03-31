// allows the nav to have fuctionality

function showNav(){
  document.querySelector('.navigation').classList.toggle('active');

  document.querySelector('.fa.fa-bars').classList.toggle('hide');
  document.querySelector('.fa.fa-plus').classList.toggle('show');
}
