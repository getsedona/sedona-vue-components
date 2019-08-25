Обертка для обычного контента и других модулей. Содержит в себе акцентный и контентный элементы.

Image prop may be string or object

```ts
interface ImageProp {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
}
```

Video prop may be string or object

```ts
interface VideoProp {
  src: string;
}
```

### Examples

#### Basic example

```js
<section class="scene">
  <div class="grid">
    <div class="grid__list  grid__list--amara">
      <div class="grid__item">
        <Card title="Default">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi.
        </Card>
      </div>
    </div>
  </div>
</section>
```

#### Variants

```js
<section class="scene">
  <div class="grid">
    <div class="grid__list  grid__list--amara">
      <div class="grid__item">
        <Card title="Default">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi.
        </Card>
      </div>
      <div class="grid__item">
        <Card title="Dark" dark>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi.
        </Card>
      </div>
      <div class="grid__item">
        <Card title="Light" light>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi.
        </Card>
      </div>
    </div>
  </div>
</section>
```

#### Example with media

```js
const imageProp = {
  src: 'https://images.unsplash.com/photo-1477089922324-c1deaf4a2242?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1d9d3ce5d60e14cbd98ce7965c703f7&auto=format&fit=crop&w=1500&q=80',
  width: 1500,
  height: 1000,
  alt: 'Test Image',
  title: 'Image Title'
}

const imagePropTwo = {
  src: 'https://images.unsplash.com/photo-1477089922324-c1deaf4a2242?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1d9d3ce5d60e14cbd98ce7965c703f7&auto=format&fit=crop&w=1500&q=80',
  alt: 'Test Image',
}

<section class="scene">
  <div class="grid">
    <div class="grid__list  grid__list--amara">
      <div class="grid__item">

        <!-- Card with image as a string -->
        <Card title="Image prop as string" image="https://images.unsplash.com/photo-1477089922324-c1deaf4a2242?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1d9d3ce5d60e14cbd98ce7965c703f7&auto=format&fit=crop&w=1500&q=80">
          Image prop provided as a string
        </Card>

      </div>
      <div class="grid__item">
        <Card :image="imageProp">
          Image proveded as a object.
        </Card>
      </div>
      <div class="grid__item">

         <!-- Card with image as a object with an img tag props -->
        <Card :image="imagePropTwo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi.
        </Card>
      </div>
    </div>
  </div>
</section>
```

#### Example with links

```js
<Card title="Default" to="/asd" />
```

#### Example with child components

```js
<Card title="Default">
  <Feature title="Feature One" sub-title="Hello, world!" />
  <Feature title="Feature Two" sub-title="Hello, world!" />
</Card>
```
