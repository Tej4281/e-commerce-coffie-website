import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

data:any=[
  {
    'img':'/assets/img/menu-1.png',
    'name':'Tasty And Healty',
    'price':'150'
  },
  {
    'img':'/assets/img/menu-2.png',
    'name':'Tasty And Healty',
    'price':'150'
  },
  {
    'img':'/assets/img/menu-3.png',
    'name':'Tasty And Healty',
    'price':'150'
  },
  {
    'img':'/assets/img/menu-4.png',
    'name':'Tasty And Healty',
    'price':'150'
  },
  {
    'img':'/assets/img/menu-5.png',
    'name':'Tasty And Healty',
    'price':'150'
  },
  {
    'img':'/assets/img/menu-6.png',
    'name':'Tasty And Healty',
    'price':'150'
  },
]

info:any=[
  {
    'img':'/assets/img/product-1.png',
    'name':'Fresh Coffee',
    'price':'750'

  },
  {
    'img':'/assets/img/product-2.png',
    'name':'Fresh Coffee',
    'price':'650'

  },
  {
    'img':'/assets/img/product-3.png',
    'name':'Fresh Coffee',
    'price':'550'

  },
]
customer:any=[
  {
    'img':'/assets/img/pic-1.png',
    'name':'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum.',
    'uname':'John Deo'
  },
  {
    'img':'/assets/img/pic-2.png',
    'name':'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum.',
    'uname':'John Deo'
  },
  {
    'img':'/assets/img/pic-3.png',
    'name':'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum.',
    'uname':'John Deo'
  }
]

blogs:any=[
  {
    'img':'/assets/img/blog-1.jpeg',
    'name':'Tasty And Refreshing Coffee',
    'text':'By Admin / 21st May, 2021',
    'para':'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'

  },
  {
    'img':'/assets/img/blog-2.jpeg',
    'name':'Tasty And Refreshing Coffee',
    'text':'By Admin / 21st May, 2021',
    'para':'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'

  },
  {
    'img':'/assets/img/blog-3.jpeg',
    'name':'Tasty And Refreshing Coffee',
    'text':'By Admin / 21st May, 2021',
    'para':'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'

  },
]
}
