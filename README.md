# CSS Maid

[https://cssmaid.netlify.com/](https://cssmaid.netlify.com/)

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

CSS Maid transforms it as follows:

```
a:link, a:visited, a:hover, a:active {
  display: inline-block;
  padding: 10px 25px;

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
6.  Grid
7.  Transitions
8.  Anything Else

### Licence

MIT
