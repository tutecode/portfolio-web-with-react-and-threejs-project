# Navbar

Certainly! Here's a detailed explanation of each line of code in the provided Navbar component:

```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
```
- This section imports the necessary dependencies, including React, the `useEffect` and `useState` hooks from React, `Link` component from React Router, and various assets and style-related files.

```jsx
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
```
- This defines a functional component called `Navbar` and declares three state variables using the `useState` hook: `active`, `toggle`, and `scrolled`. These variables will be used to manage the active link, mobile menu state, and scroll position state, respectively.

```jsx
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```
- This sets up the `useEffect` hook to add a scroll event listener when the component is mounted. Inside the effect, a `handleScroll` function is defined to check the scroll position (`window.scrollY`). If the scroll position is greater than 100 pixels, it sets `scrolled` to `true`, indicating that the page has been scrolled. Otherwise, it sets `scrolled` to `false`. The event listener is added and removed using `addEventListener` and `removeEventListener`, respectively. The empty dependency array `[]` ensures that the effect only runs once on component mount and cleanup.

```jsx
return (
  <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
  >
```
- This returns the JSX code that represents the navbar component. It renders a `<nav>` element with dynamic class names based on the `scrolled` state. The class names come from the `styles` object and the `bg-primary` or `bg-transparent` classes depending on whether `scrolled` is `true` or `false`.

```jsx
<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
```
- This starts a `<div>` element that contains the navbar content. It has flexbox properties to align its children horizontally (`justify-between`) and vertically (`items-center`). The `max-w-7xl` and `mx-auto` classes set a maximum width and center the element horizontally.

```jsx
<Link
  to='/'
  className='flex items-center gap-2'
  onClick={() => {
    setActive("");
    window.scrollTo(0, 0);
  }}
>
  <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
  <p className='text-white text-[18px] font-bold cursor-pointer flex '>
    Adrian &nbsp;
    <span className='sm:block hidden'> | JavaScript Mastery</span>
  </p>
</Link>
```
- This renders a React Router `Link` component that represents the logo and site title. It links to the root route (`'/'`) and applies a click eventhandler that resets the `active` state to an empty string and scrolls the page to the top (`window.scrollTo(0, 0)`). It contains an `<img>` element for the logo and a `<p>` element for the site title. The `gap-2` class adds a small gap between the logo and the text. The logo image is displayed using the `logo` asset, and the text is styled with classes for text color, font size, font weight, and cursor type. The `<span>` element with classes `sm:block hidden` is conditionally rendered, visible only on larger screens (non-mobile), and adds the "JavaScript Mastery" subtitle.

```jsx
<ul className='list-none hidden sm:flex flex-row gap-10'>
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`${
        active === nav.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(nav.title)}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>
```
- This renders an unordered list (`<ul>`) for the navigation links. It applies the `list-none` class to remove the default list styling. The list is hidden on small screens (`hidden sm:flex`). It maps over the `navLinks` array and renders a list item (`<li>`) for each item. Each list item has a dynamic class name that sets the text color based on whether it matches the `active` state. The `hover:text-white` class changes the text color to white on hover. The text size, font weight, and cursor type are also set. When a link is clicked, it calls the `setActive` function to update the `active` state with the corresponding link title. The link's `href` is set using the `nav.id` value.

```jsx
<div className='sm:hidden flex flex-1 justify-end items-center'>
  <img
    src={toggle ? close : menu}
    alt='menu'
    className='w-[28px] h-[28px] object-contain'
    onClick={() => setToggle(!toggle)}
  />

  <div
    className={`${
      !toggle ? "hidden" : "flex"
    } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
  >
    <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins font-medium cursor-pointer text-[16px] ${
            active === nav.title ? "text-white" : "text-secondary"
          }`}
          onClick={() => {
            setToggle(!toggle);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </div>
</div>
```
- This section represents the mobile menu for smaller screens. It contains a `<div>` with classes `sm:hidden flex flex-1 justify-end items-center` to hide it on larger screens and flex properties to align its children. Inside the mobile menu `<div>`, there is an `<img>` element for the menu icon. The `src` attribute is dynamically set based on the `toggle` state: if `toggle` is `true`, it displays the close icon; otherwise, it shows the menu icon. The icon's dimensions and object-fit properties are set with the `w-[28px] h-[28px] object-contain` classes. Clicking on the icon toggles the `toggle` state using `setToggle(!toggle)`.

The mobile menu also contains a nested `<div>` element that conditionally renders based on the `toggle` state. If `toggle` is `false`, it adds the `hidden` class to hide the menu. Otherwise, it adds the `flex` class to display it. The nested `<div>` has additional styling classes for padding, gradient background, absolute positioning, and rounded corners.

Inside the nested `<div>`, there is an `<ul>` element representing the mobile navigation links. It applies the `list-none`, `flex`, `justify-end`, `items-start`, `flex-1`, and `flex-col` classes for styling. It maps over the `navLinks` array to render the list items (`<li>`) with dynamic class names similar to the desktop navigation links. When a link is clicked, it calls the `setToggle(!toggle)` and `setActive(nav.title)` functions to toggle the mobile menu and set the active link.

```jsx
</div>
```
- Closes the mobile menu `<div>`.

```jsx
</div>
```
- Closes the main content `<div>` that contains the navbar elements.

```jsx
</nav>
```
- Closes the `<nav>` element representing the entire navbar.

```jsx
export default Navbar;
```
- Exports the `Navbar` component as the default export, making it available for use in other parts of the application.

That covers the explanation of each line of code in the Navbar component.