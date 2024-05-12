//Q.1 Create a component named "Person" that takes two props - "name" and "age". The component should  display the person's name and age in a paragraph element. 

function Person (props) {
    return (
<p>{props.name} is {props.age} years old</p>
    )
}

// Usage
<Person name='Saurabh' age = "20"/>

//Q.2  Create a component named "Button" that takes two props - "text" and "onClick". The component should  display a button element with the given text and call the onClick function when clicked.

function Button (props) {
    return (
<button onClick={props.onClick}>
    {props.text}
</button>
    )
}

// Usage
<Button text = 'Click me' onClick = {() => alert("Button clicked")}/>

//Q.3 Create a component named "Header" that takes one prop - "title". The component should display a header  element with the given title.

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}
// Usage 
<Header title = 'Welcome to my world . Explore the World' />

//Q.4 Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.

function List(props) {
     const listItems = props.items.map((item,index) => {
        return <li key={index}>{item}</li>
 })
 
return(
    <ul>
        {listItems}
    </ul>
)
}
// Usage 
<List items = {['Apple', 'Banana', 'Peanut']}/>

export {Person, Button , Header, List} 