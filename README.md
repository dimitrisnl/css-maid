# CSS Maid

🚧 🚧 In progress 🚧 🚧

### Huh?

Your CSS rules could look like this:

```
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
```

CSS Maid tranforms it as follows:

```
a:link, a:visited, a:hover, a:active {

  padding: 10px 25px;
  display: inline-block;

  background-color: green;
  color: white;

  text-align: center;
  text-decoration: none;

}
```

We sort the properties based on

1.  Positioning
2.  Display
3.  Flex
4.  Color
5.  Font
6.  Anything Else

### Deployed

[https://cocky-meninsky-8a953a.netlify.com/](Link)

### ToDo

* [x] Parse styles and do some alpha sorting
* [ ] Secondary sort by name
* [ ] Validate input
* [ ] Deploy to Netlify
* [ ] Optimize for SASS
* [ ] Optimize for SCSS
* [ ] Optimize for Emotion-based components

### Licence

MIT
