// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());


  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
      this.expandButton.textContent = 'close dat!';
      console.log('expandButton inside expandArticle after click ', this.expandButton);
      console.log('this.domElement inside expandArticle after click ', this.domElement);
      // while inside, toggle class article-open on top of article class

      let article = this.domElement.classList;

      article.toggle('article-open');
      //this.domElement.classList.toggle('article-open');
      // STRATEGY 1 - set button content on state of article-open

      console.log('is open ', article.contains('article-open') );

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