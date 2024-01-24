## Component lifecycle. Working with the REST API

### Tasks / Admission criteria

Use this
[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md)
as a starting point for your application.

- The `goit-react-hw-03-image-finder`.
- When you turn in your homework, there are links to: the source files and the
  work page projects on `GitHub Pages`.
- The component state stores the minimum required set of data, The rest is
  calculated There are no errors or warnings in the console when running the job
  code
- For each component has a separate folder with the React-component file and
  styles file
- For the components are described `propTypes`.
- Everything that a component expects in the form of a prop is passed to it when
  it is called
- Component names are clear, descriptive
- JS-code is clean and clear, `Prettier` is used
- Styling is done by CSS modules or `Styled Components`.

## Task - Image Search.

Write a keyword image search application. Preview of a working application
[see link](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Create components `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` и `<Modal>`. Ready styles of components can be taken in
file
[styles.css](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/react-homework/blob/master/homework-03/image-finder/styles.css)
and tweak them if needed.

![Alt text](image.png)

### Pixabay API instructions

For HTTP requests, use a public image search service
[Pixabay](https://pixabay.com/api/docs/). Register and get a private access key.

The URL string of the HTTP request.

`https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`

Pixabay API supports pagination, by default the `page` parameter is set to `1`.
Let the response comes with 12 objects each, set to per_page. Don't Remember
that when you search for a new keyword, you have to reset the value of `page` to
`1`.

The response from the api comes an array of objects in which you are only
interested in the following properties.

- `id` - a unique identifier
- `webformatURL` - link to the small image for the list of cards
- `largeImageURL` - link to the large image for the modal window

### Description of the component `<Searchbar>`.

The component takes one prop `onSubmit` - a function to pass the value of the
iput When the form is submitted. Creates a DOM element of the following
structure.

```javascript
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

### Description of the `<ImageGallery>` component.

A list of image cards. Creates a DOM element of the following structure.

```javascript
<ul class="gallery">
  <! -- Set <li>
  with images -->
</ul>
```

### Description of the component `<ImageGalleryItem>`.

A list item component with an image. Creates a DOM element of the following
structure.

```javascript
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

### Description of the `<Button>` component

Pressing the `Load more` button should load the next batch of Images and
rendered with the previous ones. The button should be rendered only when there
are some loaded images. If the image array is empty, the button is not rendered.

### Description of the `<Loader>` component.

Spinner component, displays while images are being loaded. Use any ready made
component, e.g.
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner).

### Description of the component `<Modal>`.

When you click on a gallery item a modal window with a dark overlay and display
a larger version of the image. The modal window should be closed.

The appearance is similar to the functionality of this
[VanillaJS-plugin](https://basiclightbox.electerious.com/), only instead of
white modal window the image is rendered (in the example press `Run`). Animation
is not required.

```javascript
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
