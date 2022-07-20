import './Blog.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Blog = () => {
    
   const cardInfo = [
       {image: "https://static2.jetpens.com/images/a/000/216/216131.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=4c53198138d973c8148122400e99c951", 
       title: "How to Clear a Mechanical Pencil Lead Jam", text: "We show you how to fix a jammed mechanical pencil by clearing out bits of broken lead. Follow along with pictures and step-by-step instructions to get your pencil writing again!"
  , href: "https://www.jetpens.com/blog/How-to-Clear-a-Mechanical-Pencil-Lead-Jam/pt/311"},
       
       {image: "https://static2.jetpens.com/images/a/000/212/212950.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=ffe8364f203c9c704e81fa7991ecf1eb", 
       title: "The Beginner's Guide to Fountain Pens", text: "If you’ve never tried a fountain pen before, we really think you should give one a shot. We share some instructions and advice to help you get started, like how to install the ink and hold the pen. Happy writing!"
       , href: "https://www.jetpens.com/blog/The-Beginner-s-Guide-to-Fountain-Pens/pt/927"},
      
       {image: "https://static2.jetpens.com/images/a/000/216/216428.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=f65da9e12f26551d89b0767f8052c3b1", 
       title: "The Best Pastel Gel Pens", text: "Pastel gel pens are a subtle way to add visual interest to writing and artwork. They can add a nice touch to a card or to your important study notes. Read on to see the best pastel gel pens for writing and crafting."
       , href: "https://www.jetpens.com/blog/The-Best-Pastel-Gel-Pens/pt/342"},
      
       {image: "https://static2.jetpens.com/images/a/000/215/215570.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=281b21b984cffcdaf2fa5ed48467a810", 
       title: "The Best Eco-Friendly Notebooks and Stationery", text: "We’ve found great eco-friendly notebooks, pens, pencils, and more. All of these stationery picks will make your stationery collection a little kinder to the earth."
       , href: "https://www.jetpens.com/blog/The-Best-Eco-Friendly-Notebooks-and-Stationery/pt/345"},
      
       {image: "https://static2.jetpens.com/images/a/000/207/207507.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=e77802d8f5854cfd4fc4df26d25ad921", 
       title: "Taiwanese Stationery Brands You Need to Know", text: "In this guide, we will take a closer look at eleven Taiwanese stationery brands that are beloved by millions. We will recommend stellar products that deserve a spot in your collection."
       , href: "https://www.jetpens.com/blog/Taiwanese-Stationery-Brands-You-Need-to-Know/pt/993"},
      
       {image: "https://static2.jetpens.com/images/a/000/200/200194.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=df919c9ff224af8d6c0162353bad2fad", 
       title: "The Best Pens & Inks for Tomoe River Paper (Plus Paper Alternatives)", text: "Tomoe River paper is one of the best papers for fountain pens. We'll discuss several different papers that are excellent substitutes for Tomoe River paper."
       , href: "https://www.jetpens.com/blog/The-Best-Pens-Inks-for-Tomoe-River-Paper-Plus-Paper-Alternatives/pt/992"},
      
       {image: "https://static2.jetpens.com/images/a/000/216/216449.jpg?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=e8137973a51069a40699e9c0cc00fd85", 
       title: "Uni Style Fit: A Comprehensive Guide", text: "We explore every aspect of the dazzling Uni Style Fit pen system, including all of the available pen bodies, refills, and tips on how to use them. Watch the video to see these pens up close!"
       , href: "https://www.jetpens.com/blog/Uni-Style-Fit-A-Comprehensive-Guide/pt/889"},
      
       {image: "https://static2.jetpens.com/images/a/000/215/215132.JPG?auto=format&chromasub=444&fm=jpg&q=90&usm=20&w=350&s=2c02d9e51ab6375cbaabc8d137d2b7a0", 
       title: "The Best Pens & Stationery for Left-Handers", text: "Left-hand dominant people make up about 10% of the world’s population. In this guide, we’ll focus on pens, pencils, notebooks and more that are suitable for the left-handed among us."
       , href: "https://www.jetpens.com/blog/The-Best-Pens-Stationery-for-Left-Handers/pt/891"},
      
   ];
   
   const renderCard = (card, index) => {
       return(
        <Card style={{ width: '100px' }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text> {card.text}  </Card.Text>
            <a href={card.href}>
            <Button variant="warning">Read More</Button>
            </a>
            </Card.Body>
      </Card>
       );
   };

    return <div className = "grid"> {cardInfo.map(renderCard)}</div>;
};

export default Blog