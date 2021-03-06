// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    console.log('inside constructor, this.domElement is ',this.domElement);

    this.domElement_p = this.domElement.querySelectorAll('p');
      console.log('this.domElement_p is  ', this.domElement_p);

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
      console.log('this.expandButton inside constuctor is', this.expandButton);
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle() );


    this.date_p = this.domElement.querySelectorAll('.date');
    console.log('these ARE ALL date_p NODELIST vals ', this.date_p);
    // make it date react  to mouse pointer
     this.date_p.forEach(date =>

     {
       date.style.cursor = 'pointer';
       date.addEventListener('dblclick', () => this.expandArticle());
     }
     );

      console.log('this.date_p with cursor SET ', this.date_p);



  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
      //this.expandButton.textContent = 'close dat!';
      console.log('expandButton inside expandArticle after click ', this.expandButton);
      console.log('this.domElement inside expandArticle after click ', this.domElement);
      // while inside, toggle class article-open on top of article class

    console.log('the targeted domElement is', this.domElement);


    this.domElement_p = this.domElement.querySelectorAll('p');
    console.log('this.domElement_p inside expandArticle is  ', this.domElement_p);



    console.log('this.domElement_p[1].classList is ', this.domElement_p[1].classList);
    // EXPERIMENT make all p tags display on click
      for(let i = 1; i < this.domElement_p.length; i++){
        this.domElement_p[i].classList.toggle('show_p');
      }

    ////////////////////////////////////////////
    let article = this.domElement.classList;
    ////////////////////////////////////////////

      console.log('inside expandArticle, domElement.classList is', article);

      article.toggle('article-open');
      //this.domElement.classList.toggle('article-open');
      // STRATEGY 1 - set button content on state of article-open

      console.log('is open ', article.contains('article-open') );

      // EXPERIMENT
      this.date_p = this.domElement.querySelectorAll('.date');
        console.log('date_p QSA gives back ', this.date_p);





      if(article.contains('article-open')) {
        this.expandButton.textContent = 'close';
        } else {
        this.expandButton.textContent = 'expand';
      }

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
console.log('NodeList of all .article from QSA is ', articles);

articles.forEach(article => new Article(article));